import styled from "@emotion/styled";
import React, { FC, useMemo } from "react";
import Tag from "./Tag";
import { Category } from "../types";

const Wrapper = styled.div`
  margin-bottom: 1em;
`;

interface PostCatagoryProps {
  category: Category;
}

const PostCatagory: FC<PostCatagoryProps> = ({ category }) => {
  const tagColor = useMemo(() => {
    switch (category) {
      case "HTML":
        return "#F44336";
      case "CSS":
        return "#42A5F5";
      case "Javascript":
        return "#FFC400";
      case "React":
        return "#4FC3F7";
    }
  }, [category]);

  return (
    <Wrapper>
      <Tag color={tagColor}>{category}</Tag>
    </Wrapper>
  );
};

export default PostCatagory;
