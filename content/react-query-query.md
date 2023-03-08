---
slug: "/posts/2023-03-08-react-query-query"
date: "2023-03-08"
title: "react-query : useQuery 활용법"
description: "react-query의 useQuery에 대해 정리한 글입니다."
category: "react-query"
---

# react-query : useQuery 활용법

## Query

- 서버에서 data를 가져오는 모든 Promise 기반 메서드(GET 또는 POST)와 함께 사용할 수 있음
- React에서 컴포넌트 또는 커스텀 훅 내부에 Query를 subscribe하려면 `useQuery` 훅을 사용하면됨

<br/>
<br/>

## useQuery

- React에서 컴포넌트 또는 커스텀 훅 내부에 Query를 subscribe하기 위한 훅(hook)
- useQuery는 3개의 인자 값을 받는다.

  - 쿼리에 대한 고유 키 (`required`)
  - Promise 객체를 return 하는 함수 (`required`)
  - 기타 옵션들 (`optional`)

<br/>
<br/>

## Query key

- `string` 또는 `array`를 받음
- `string`으로 전달하면 내부적으로 `array`로 변환
  - 내부적으로 Query key를 `"hello"`로 전달하는 거랑 `["hello"]`로 전달하는 것이 동일한 쿼리
- 일반적으로 리스트를 불러오는 쿼리를 실행할 때 `string`으로 전달하고, 어떠한 특정한 조건을 쿼리에 전달해야 할때에는 `array`로 전달해야함
- `array`로 전달할 때에는 값의 순서가 다르면 다른 쿼리라고 판단
- 내부적으로 쿼리를 refetch 하거나, 캐싱하거나, 공유할 때 사용됨

<br/>
<br/>

## Query function

- promise를 return 해줘야함
- resolve된 값은 useQuery의 return 객체의 `data` 프로퍼티에 저장됨
- error를 전달하면 useQuery의 return 객체의 `error` 프로퍼티에 저장됨

  - `axios`는 request에 대해 에러가 발생하면 자동으로 오류를 던지지만 `fetch` 경우에는 내부에서 에러는 던져줘야함

    ```javascript
    const getTodoList = async () => {
      const response = await fetch("http://localhost:8080/todos");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    };
    ```

- query key를 query function 인자로 전달할 수 있음

  ```javascript
  const getTodoList = async ({ queryKey }) => {
    console.log(queryKey); // ["todoList", {page: 1}]

    // ...
  };

  const query = useQuery(["todoList", { page: 1 }], getTodoList);
  ```

- unique key는 내부적으로 쿼리를 refetch 하거나, 캐싱하거나, 공유할 때 사용됨

<br/>
<br/>

## useQuery에 반환되는 값

- useQuery에서 return 값은 렌더링 하기위해 필요한 값들을 포함
  - `isLoading` : 데이터가 없으며 `fetching` 상태인지?
  - `isError` : `fetching` 중에 에러가 발생했는지?
  - `isSuccess` : data를 성공적으로 가져왔는지?
  - `isIdle` : 쿼리를 사용할 수 없는지?
  - `status` : 위의 4가지 결과 값을 대체 가능
    - status === `"loading"` : `isLoading`과 동일
    - status === `"error"` : `isError`과 동일
    - status === `"success"` : `isSuccess` 동일
    - status === `"idle"` : `isIdle` 동일
  - `error` : error가 발생했을 때(isError가 true일 때), query function로 부터 전달받은 `error 값`
  - `data` : 성공적으로 data를 받아올 때, query function의 `return 값`
  - `isFetching` : 쿼리를 `fetching` 중인지? (`refetching` 포함)

```javascript
function App() {
  // async function fetchTodoList() {
  //   const res = await axios.get("http://localhost:8080/todos");
  //   return res;
  // }
  // ...

  const { data: todoList, status } = useQuery("todos", fetchTodoList);

  // isLoading === true와 동일
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  // isError === true와 동일
  if (status === "error") {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <div>
      <ul>{todoList ? todoList.map((todo) => <TodoItem key={todo.id} {...todo} />) : null}</ul>
    </div>
  );
}
```

<br/>
<br/>

## Typescript 환경에서 type 정의

```typescript
const query = useQuery<Todo[], AxiosError>(["todoList", value], getTodoList);
```

- useQuery<Q, E>(query key, query function)
  - `Q` : query function의 return 값의 type
  - `E` : query function에서 전달한 error type

<br/>
<br/>

## 참고

[react-query 공식문서](https://react-query-v3.tanstack.com)
