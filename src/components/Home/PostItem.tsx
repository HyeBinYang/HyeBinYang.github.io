import React, { FC, useMemo } from "react";
import { colors, Flex } from "../../style";
import { Category, PostFrontMatter } from "types";
import styled from "@emotion/styled";
import { format } from "date-fns";
import PostCategory from "./PostCategory";
import JavascriptThumb from "../../assets/images/thumbnails/javascript.png";
import CSSThumb from "../../assets/images/thumbnails/css.png";

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
  color: #616161;
  line-height: 1.5em;
`;

const PostThumbnail = styled.div`
  transform: scale(1);
  transition: transform linear 0.1s;
`;

const Wrapper = styled.li`
  padding: 1.3em 0;
  color: ${colors.black};
  opacity: 1;
  cursor: pointer;
  transition: opacity linear 0.1s;

  &:hover {
    ${PostTitle} {
      color: #29b6f6;
    }

    ${PostThumbnail} {
      transform: scale(1.2);
    }
  }
`;

interface PostItemProps {
  post: PostFrontMatter;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const { date, title, category, description } = post;

  return (
    <Wrapper>
      <PostCategory category={category as Category} />
      <Flex justifyContent="space-between" gap="20px">
        <div>
          <PostTitle>{title}</PostTitle>
          <PostDate>{format(new Date(date), "yyyy-MM-dd")}</PostDate>
          <PostDescription>{description}</PostDescription>
        </div>
      </Flex>
    </Wrapper>
  );
};

export default PostItem;
