---
slug: "/posts/responsive-web"
date: "2023-03-01"
title: "반응형 웹에 필요한 CSS"
description: "반응형 웹을 적용하기 위해 필요한 CSS 지식을 공부한 내용을 요약했습니다."
category: "CSS"
---

# 반응형 웹에 필요한 스킬들

반응형 웹이란 디바이스의 디스플레이의 크기 및 종류에 반응하여 이에 알맞는 웹 페이지를 사용자에게 보여주는 것 입니다. 반응형 웹을 적용하면 사용자는 어떠한 디바이스 환경에서도 웹 사이트를 편하게 이용할 수 있는 장점이 있습니다. PC, 모바일 환경 등 다양한 디바이스를 통해 웹사이트를 접속할 수 있는 요즘 반응형 웹 적용은 굉장히 UX적 측면에서 중요한 부분입니다. 반응형 웹을 적용하기 위해 알아야 할 것들을 소개하겠습니다.

<br/>
<br/>

## 상대 크기 : em vs rem

- 절대 길이 단위인 `px`은 어떤 상황에서도 동일한 값을 유지하기 때문에 가변성이 없음
- `em`과 `rem`은 박스에서 텍스트 크기를 조정할 때 사용하는 상대 단위
- `em`은 **부모 요소의 글꼴 크기**를, `rem`은 **루트 요소의 글꼴 크기**를 의미
- `em`으로 여백 크기(padding, margin)를 정할 때는 자기 자신의 글자 크기를 기준으로 함

```html
<html lang="en">
  <head>
    <style>
      body {
        font-size: 16px;
      }

      .parent {
        font-size: 2em; /* 16px(body 태그의 폰트사이즈) * 2 = 32px */
      }

      .child1 {
        font-size: 2em; /* 32px * 2 = 64px */
        margin: 2em; /* 64px * 2 = 128px */
        padding: 1.5em; /* 64px * 1.5 = 96px */
      }

      .child2 {
        font-size: 2rem; /* 16px(html태그의 폰트사이즈) * 2 = 32px */
        margin: 2em; /* 32px * 2 = 64px */
        padding: 3em; /* 32px * 3 = 96px */
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child1">child1</div>
      <div class="child2">child2</div>
    </div>
  </body>
</html>
```

<br/>
<br/>

## viewport 단위 : vw, vh, vmin, vmax

- `em` 과 `rem` 은 상위 요소의 글자 크기에 따라 반응할 뿐 브라우저나 기기 화면의 크기에 따라 크기가 달라지는건 아님
- viewport 크기를 기반으로 크기를 계산하는 가변 단위들
- `vw` : viewport 너비의 1/100 크기
- `vh` : viewport 높이의 1/100 크기
- `vmin` : viewport 높이와 너비 중 작은 쪽의 1/100 크기
- `vmax` : viewport 높이와 너비 중 큰 쪽의 1/100 크기

<br/>
<br/>

## 가변 레이아웃 : %

- 비율 계산 기반으로 변화하는 가변 레이아웃에는 % 단위가 주로 사용됨
- % 단위는 백분율 값으로, 부모 요소와의 상대적 크기를 지정
- 너비와 여백은 부모 요소의 너비의 비례해 계산됨
- 높이는 부모 요소의 높이에 비례해 계산됨
- 글자 크기는 부모 요소의 글자 크기에 비례해 계산됨

```html
<html lang="en">
  <head>
    <style>
      .parent {
        width: 200px;
        height: 100px;
        font-size: 50px;
      }

      .child {
        width: 50%; /* 200px * 0.5 = 100px */
        height: 20%; /* 100px * 0.2 = 20px */
        padding: 25%; /* 200px * 0.25 = 50px */
        font-size: 50%; /* 50px * 0.5 = 25px */
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child">child</div>
    </div>
  </body>
</html>
```

<br/>
<br/>

## CSS 함수 개념과 calc()

- CSS의 함수는 괄호 안에 인수를 전달하면, 인수에 따른 결과값을 속성에 적용시킴
- `calc()`를 이용하면 계산식의 결과를 속성값으로 지정할 수 있음

```html
<html lang="en">
  <head>
    <style>
      .parent {
        width: 60vw;
        height: 100px;
      }

      .child {
        width: calc(50% - 50px); /* (60vw * 0.5) - 50px */
      }
    </style>
  </head>
  <body>
    <div class="parent">
      <div class="child">child</div>
    </div>
  </body>
</html>
```

<br/>
<br/>

## 미디어 쿼리

- 미디어 쿼리는 미디어 타입을 인식하고, 콘텐츠를 읽어들이는 기기나 브라우저의 물리적 속성을 감지
- 미디어 타입과 조건문으로 구성 (@media 미디어 타입 and (조건문))
- 다양한 미디어 타입과 조건을 지정할 수 있음
- 화면(screen)의 너비(width)를 조건으로 사용하는 경우가 가장 많음

```html
<html lang="en">
  <head>
    <style>
      .container {
        width: 1000px;
        height: 100px;
        background-color: tomato;
      }

      /* 800px 보다 작으면 아래 CSS 가 적용됨 */
      @media screen and (max-width: 800px) {
        .container {
          width: 700px;
        }
      }
    </style>
  </head>
  <body>
    <div class="container"></div>
  </body>
</html>
```
