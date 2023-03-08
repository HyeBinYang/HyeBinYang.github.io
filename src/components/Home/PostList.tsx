import { graphql, Link, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";
import Post from "./PostItem";
import { Posts } from "../../types";
import { Flex } from "../../style";
import styled from "@emotion/styled";

const PostListWrapper = styled(Flex)`
  list-style: none;
  padding-bottom: 100px;
`;

const PostList = () => {
  const data = useStaticQuery(query);
  const posts: Posts[] = useMemo(() => data.allMarkdownRemark.edges, [data.allMarkdownRemark.edges]);

  return (
    <section>
      <PostListWrapper as="ul" flexDirection="column" gap="40px">
        {posts.map((post) => (
          <Link to={post.node.frontmatter.slug} key={post.node.id}>
            <Post post={post.node.frontmatter} />
          </Link>
        ))}
      </PostListWrapper>
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
