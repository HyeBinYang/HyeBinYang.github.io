---
slug: "/posts/2023-03-09-react-query-mutation"
date: "2023-03-09"
title: "React Query의 mutation"
description: "React Query의 mutation에 대해 정리한 글입니다."
category: "react-query"
---

# React Query의 mutation

## mutation

- 일반적으로 서버에 `side-effect`를 일으키는 함수에 대한 내용을 정의
- 예를 들어, DB에 todo를 추가하는 작업을 mutation이라고 할 수 있다.
- React 에서는 `useMutation` hook을 사용

<br/>
<br/>

## useQuery와 차이점

- useQuery는 `declarative`지만, useMutation은 `imperative`이다.
  - query는 일반적으로 자동으로 실행되지만, mutation은 따로 호출을 해야한다.
- useQuery는 상태를 공유하지만, useMutation은 상태를 공유하지 않는다.

<br/>
<br/>

## mutation을 query에 대한 변경사항을 반영하는 방법

## Invalidation

- mutation 후 무효화시킬 쿼리를 queryClient에게 알려주는 방법이다.
- 관련 쿼리는 다시 `refetch`를 해서 서버에 재요청을 한다.

```typescript
const useAddTodo = (todo) => {
  const queryClient = useQueryClient();

  return useMutation((newComment) => axios.post(`/todo`, todo), {
    onSuccess: () => {
      // mutation이 성공하면 "todos"키를 가진 쿼리를 무효화 시킨다.
      queryClient.invalidateQueries("todos");
    },
  });
};
```

## Direct updates

- 서버에 재요청을 보내지 않고 기존 data에 업데이트 해야하는 data를 클라이언트에서 추가하는 방법이다.

```typescript
const useAddTodo = (todo) => {
  const queryClient = useQueryClient();

  return useMutation((newComment) => axios.post(`/todo`, todo), {
    onSuccess: (newTodo) => {
      // mutation이 성공하면 "todoList"키를 가진 쿼리에 newTodo data를 추가한다.
      queryClient.setQueryData("todoList", (old) => [...old, newTodo]);
    },
  });
};
```

## Optimistic updates

- 서버에 요청을 보내기 전에 mutation의 성공을 했다고 가정하고 query상태를 업데이트를 하는 것이다.
- 에러가 발생하면 이전 상태로 `rollback` 시키는 로직이 필요하다.

```typescript
useMutation(updateTodo, {
  onMutate: async (newTodo) => {
    await queryClient.cancelQueries("todos");

    const previousTodos = queryClient.getQueryData("todos");

    // 서버에 요청 보내기 전 미리 query 상태를 업데이트
    queryClient.setQueryData("todos", (old) => [...old, newTodo]);

    return { previousTodos };
  },
  onError: (err, newTodo, context) => {
    // 에러가 발생하면 이전 쿼리 상태로 롤백시킴
    queryClient.setQueryData("todos", context.previousTodos);
  },
});
```

<br/>
<br/>

## mutation를 다룰 때 주의할 점

## Mutate vs MutateAsync

- `mutate`는 아무것도 return 하지 않는다.
- `mutateAsync`는 mutation의 결과를 포함하는 Promise 객체를 return한다.
- mutation response에 접근이 필요할 때 `mutateAsync`를 사용하면 된다.
- `mutateAsync`를 사용시 별도의 에러 처리가 필요

## mutation function에 인자를 전달할 때 주의할 점

단 한 개의 인자만 넘길 수 있기 때문에 여러 개의 값을 넘길 때는 `object`를 사용하여 넘기면 된다.

```javascript
// mutate 함수에 인자는 한 개의 값만 받기 때문에 에러 발생
const mutation = useMutation((title, description) => updateTodo(title, description));
mutation.mutate("hello", "world");

// 객체로 묶어서 넘겨주면 된다.
const mutation = useMutation(({ title, description }) => updateTodo(title, description));
mutation.mutate({ title: "hello", description: "world" });
```

## useMutation callback vs mutate callback

- `useMutation` 콜백이 먼저 호출 후 `mutate` 콜백이 호출된다.
- `mutate`는 컴포넌트가 언마운트되면 실행되지 않을 수 있다.
- 절대적으로 필요한 작업(예를 들면 mutation 후 쿼리 무효화)인 경우 `useMutation` 콜백에서 수행해야함
- 특정한 mutate에 대한 작업이 필요한 경우(예를 들어 수정 완료 알림)는 `mutate` 콜백에서 수행하면됨

<br/>
<br/>

## 참고

https://react-query-v3.tanstack.com

https://tkdodo.eu/blog/mastering-mutations-in-react-query

https://parang.gatsbyjs.io/react/2022-react-13/
