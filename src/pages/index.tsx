import React from "react";
import { Global } from "@emotion/react";
import { globalStyle } from "../style";
import Header from "components/Header";

const Home = () => {
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
    </div>
  );
};

export default Home;
