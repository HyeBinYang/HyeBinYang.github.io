import styled from "@emotion/styled";
import React, { FC } from "react";
import Tag from "../Common/Tag";
import { Category } from "../../types";

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

interface PostCategoryProps {
  category: Category;
}

const PostCategory: FC<PostCategoryProps> = ({ category }) => {
  return (
    <Wrapper>
      <Tag color="#1E88E5">{category}</Tag>
    </Wrapper>
  );
};

export default PostCategory;
