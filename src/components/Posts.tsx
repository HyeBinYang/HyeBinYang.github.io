import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import Post from "./Post";
import { TPost } from "../types";
import { Flex } from "../style";

const Posts = () => {
  const data = useStaticQuery(query);
  const posts: TPost[] = useMemo(() => data.allMarkdownRemark.edges, [data.allMarkdownRemark.edges]);

  return (
    <section>
      <Flex as="ul" flexDirection="column" gap="40px">
        {/* {posts.map((post) => (
          <Post {...post} key={post.node.id} />
        ))} */}
        <li
          css={{
            cursor: "pointer",
            opacity: 0.7,
            padding: "16px 0",
            transition: "opacity linear 0.1s",
            ":hover": { opacity: 1 },
          }}
        >
          <h1>제목</h1>
          <p>paragraph</p>
        </li>
        <li
          css={{
            cursor: "pointer",
            opacity: 0.7,
            padding: "16px 0",
            transition: "opacity linear 0.1s",
            ":hover": { opacity: 1 },
          }}
        >
          <h1>제목</h1>
          <p>paragraph</p>
        </li>
        <li
          css={{
            cursor: "pointer",
            opacity: 0.7,
            padding: "16px 0",
            transition: "opacity linear 0.1s",
            ":hover": { opacity: 1 },
          }}
        >
          <h1>제목</h1>
          <p>paragraph</p>
        </li>
        <li
          css={{
            cursor: "pointer",
            opacity: 0.7,
            padding: "16px 0",
            transition: "opacity linear 0.1s",
            ":hover": { opacity: 1 },
          }}
        >
          <h1>제목</h1>
          <p>paragraph</p>
        </li>
        <li
          css={{
            cursor: "pointer",
            opacity: 0.7,
            padding: "16px 0",
            transition: "opacity linear 0.1s",
            ":hover": { opacity: 1 },
          }}
        >
          <h1>제목</h1>
          <p>paragraph</p>
        </li>
        <li
          css={{
            cursor: "pointer",
            opacity: 0.7,
            padding: "16px 0",
            transition: "opacity linear 0.1s",
            ":hover": { opacity: 1 },
          }}
        >
          <h1>제목</h1>
          <p>paragraph</p>
        </li>
      </Flex>
    </section>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            category
          }
        }
      }
    }
  }
`;

export default Posts;
