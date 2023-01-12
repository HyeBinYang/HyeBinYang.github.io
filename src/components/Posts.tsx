import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import Post from "./Post";
import { TPost } from "../types";

const Posts = () => {
  const data = useStaticQuery(query);
  const posts: TPost[] = useMemo(() => data.allMarkdownRemark.edges, [data.allMarkdownRemark.edges]);

  return (
    <section>
      <ul
        css={{
          cursor: "pointer",
          padding: "16px 0",
          opacity: 0.7,
          transition: "opacity linear 0.1s",
          ":hover": { opacity: 1 },
        }}
      >
        {posts.map((post) => (
          <Post {...post} key={post.node.id} />
        ))}
      </ul>
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
