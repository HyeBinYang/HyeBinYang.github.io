import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "../style";
import Header from "components/Header";
import Posts from "components/Posts";
import styled from "@emotion/styled";

const Main = styled.main`
  width: 60%;
  max-width: 950px;
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
        <Posts />
      </Main>
    </>
  );
};

export default Home;
