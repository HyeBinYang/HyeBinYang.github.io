import { css } from "@emotion/react";

export const colors = {
  white: "#ffffff",
  black: "#000000",
  primary: "#90CAF9",
};

export const globalStyle = css`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style-type: none;
  }
`;
