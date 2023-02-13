import React from "react";
import { colors } from "../style";
import { TPost } from "types";

const Post = (post: TPost) => {
  return (
    <li
      css={{
        color: colors.black,
        cursor: "pointer",
        opacity: 0.7,
        padding: "16px 0",
        transition: "opacity linear 0.1s",
        ":hover": { opacity: 1 },
      }}
    >
      <h1>{post.node.frontmatter.title}</h1>
      <p>{post.node.excerpt}</p>
    </li>
  );
};

export default Post;
