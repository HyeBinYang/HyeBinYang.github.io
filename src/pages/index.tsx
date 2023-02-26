import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "../style";
import Header from "components/Header";
import Utterances from "components/Utterances";
import Posts from "components/Posts";

const Home = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Header />
      <main css={{ width: "60%", maxWidth: "950px", margin: "60px auto 0" }}>
        <Posts />
      </main>
    </>
  );
};

export default Home;
