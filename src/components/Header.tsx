import React from "react";
import { Link, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { useMemo } from "react";
import { colors, Flex } from "../style";
import { BsGithub } from "react-icons/bs";
import styled from "@emotion/styled";

type Me = {
  github: string;
};

const Wrapper = styled.header`
  width: 100%;
  height: 120px;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Header = () => {
  const data = useStaticQuery(query);
  const me: Me = useMemo(() => data.site.siteMetadata.me, [data.site.siteMetadata.me]);

  return (
    <Wrapper>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        css={{
          width: "60%",
          maxWidth: "950px",
          margin: "0 auto",
        }}
      >
        <Link to="/">
          <h1 css={{ color: colors.white }}>Robin's blog</h1>
        </Link>
        <a href={me.github}>
          <BsGithub size={40} color={"black"} />
        </a>
      </Flex>
    </Wrapper>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        me {
          github
        }
      }
    }
  }
`;

export default Header;
