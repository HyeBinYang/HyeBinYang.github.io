import React from "react";
import { TPost } from "types";

const Post = (post: TPost) => {
  return (
    <li key={post.node.id}>
      <h1>{post.node.frontmatter.title}</h1>
      <p>{post.node.excerpt}</p>
    </li>
  );
};

export default Post;
