import React from "react";
import { Link, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { useMemo } from "react";
import { colors } from "../style";
import { BsGithub } from "react-icons/bs";

type Me = {
  github: string;
};

const Header = () => {
  const data = useStaticQuery(query);
  const me: Me = useMemo(() => data.site.siteMetadata.me, [data.site.siteMetadata.me]);

  return (
    <header
      css={{
        width: "100%",
        height: "80px",
        backgroundColor: colors.primary,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <Link to="/">
        <h1 css={{ color: colors.white }}>Robin's blog</h1>
      </Link>
      <a href={me.github}>
        <BsGithub size={40} color={"black"} />
      </a>
    </header>
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
