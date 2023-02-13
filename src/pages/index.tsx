import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "../style";
import Header from "components/Header";
import Utterances from "components/Utterances";
import Posts from "components/Posts";

const Home = () => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
      <main css={{ maxWidth: "1200px", width: "80%", margin: "60px auto 0" }}>
        <Posts />
      </main>
    </div>
  );
};

export default Home;
