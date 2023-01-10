import React from "react";
import { useStaticQuery } from "gatsby";
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
        width: "100vw",
        height: "80px",
        backgroundColor: colors.primary,
        display: "flex",
        alignItems: "center",
        flexDirection: "row-reverse",
      }}
    >
      <a href={me.github} css={{ marginRight: "20px" }}>
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
