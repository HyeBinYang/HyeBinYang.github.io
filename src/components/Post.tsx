import React from "react";
import { colors } from "../style";
import { Category, TPost } from "types";
import styled from "@emotion/styled";
import { format } from "date-fns";
import PostCatagory from "./PostCatagory";

const PostTitle = styled.h1`
  font-size: 1.6em;
  font-weight: 700;
  color: #000;
  transition: color linear 0.1s;
`;

const PostDate = styled.p`
  font-size: 1.1em;
  margin: 0.4em 0 0.6em;
  color: #9e9e9e;
`;

const PostDescription = styled.p`
  line-height: 1.5em;
`;

const PostItem = styled.li`
  padding: 1.3em 0;
  color: ${colors.black};
  opacity: 1;
  cursor: pointer;
  transition: opacity linear 0.1s;

  &:hover ${PostTitle} {
    color: #29b6f6;
  }
`;

const Post = (post: TPost) => {
  return (
    <PostItem>
      <PostCatagory category={post.node.frontmatter.category as Category} />
      <PostTitle>{post.node.frontmatter.title}</PostTitle>
      <PostDate>{format(new Date(post.node.frontmatter.date), "yyyy-MM-dd")}</PostDate>
      <PostDescription>{post.node.excerpt}</PostDescription>
    </PostItem>
  );
};

export default Post;
