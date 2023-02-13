import { graphql, Link, useStaticQuery } from "gatsby";
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
        {posts.map((post) => (
          <Link to={post.node.frontmatter.slug} key={post.node.id}>
            <Post {...post} key={post.node.id} />
          </Link>
        ))}
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
