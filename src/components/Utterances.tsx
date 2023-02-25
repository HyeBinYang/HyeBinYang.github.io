import React, { useEffect, useRef } from "react";

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

  return <div ref={commentEl} />;
};

export default Utterances;
