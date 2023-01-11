import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "../style";
import Header from "components/Header";
import Utterances from "components/Utterances";

const Home = () => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
      <Utterances />
    </div>
  );
};

export default Home;
