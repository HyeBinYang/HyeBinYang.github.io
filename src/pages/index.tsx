import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "../style";
import Header from "components/Common/Header";
import PostList from "components/Home/PostList";
import styled from "@emotion/styled";

const Main = styled.main`
  width: 60%;
  max-width: 640px;
  margin: 60px auto 0;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

const Home = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <Main>
        <PostList />
      </Main>
    </>
  );
};

export default Home;
