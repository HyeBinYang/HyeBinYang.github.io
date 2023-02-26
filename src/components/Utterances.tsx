import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";

const Wrapper = styled.div`
  width: 60%;
  max-width: 950px;
  margin: 2.5em auto 0;

  & > .utterances {
    max-width: none;
  }
`;

const Utterances = () => {
  const commentEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptEl = document.createElement("script");
    scriptEl.async = true;
    scriptEl.src = "https://utteranc.es/client.js";
    scriptEl.setAttribute("repo", "HyeBinYang/HyeBinYang.github.io");
    scriptEl.setAttribute("issue-term", "pathname");
    scriptEl.setAttribute("theme", "github-light");
    scriptEl.setAttribute("crossorigin", "anonymous");

    commentEl.current?.appendChild(scriptEl);
  }, []);

  return (
    <Wrapper
      ref={commentEl}
      // style={{
      //   width: "60%",
      //   maxWidth: "950px",
      //   margin: "0 auto",
      // }}
    />
  );
};

export default Utterances;
