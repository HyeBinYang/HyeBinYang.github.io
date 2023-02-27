import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface TagProps {
  children?: ReactNode;
  color: string;
}

const Wrapper = styled.span<TagProps>`
  padding: 0.4em 0.6em;
  background-color: ${({ color }) => color};
  border-radius: 16px;
  color: #fff;
  font-size: 0.8em;
  font-weight: 700;
`;

const Tag: React.FC<TagProps> = ({ children, color }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default Tag;
