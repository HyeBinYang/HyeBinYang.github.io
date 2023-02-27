import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import Post from "./PostItem";
import { Posts } from "../../types";
import { Flex } from "../../style";

const PostList = () => {
  const data = useStaticQuery(query);
  const posts: Posts[] = useMemo(() => data.allMarkdownRemark.edges, [data.allMarkdownRemark.edges]);

  return (
    <section>
      <Flex as="ul" flexDirection="column" gap="40px">
        {posts.map((post) => (
          <Link to={post.node.frontmatter.slug} key={post.node.id}>
            <Post post={post.node.frontmatter} />
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
            description
            category
          }
        }
      }
    }
  }
`;

export default PostList;
