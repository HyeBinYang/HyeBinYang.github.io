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
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderWrapper = styled(Flex)`
  width: 60%;
  height: 120px;
  max-width: 950px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

const HedaerTitle = styled.h1`
  font-size: 1.8em;
  font-weight: 700;
  color: ${colors.white};
`;

const Header = () => {
  const data = useStaticQuery(query);
  const me: Me = useMemo(() => data.site.siteMetadata.me, [data.site.siteMetadata.me]);

  return (
    <Wrapper>
      <HeaderWrapper alignItems="center" justifyContent="space-between">
        <Link to="/">
          <HedaerTitle css={{ color: colors.white }}>Robin's blog</HedaerTitle>
        </Link>
        <a href={me.github}>
          <BsGithub size={30} color={"black"} />
        </a>
      </HeaderWrapper>
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
