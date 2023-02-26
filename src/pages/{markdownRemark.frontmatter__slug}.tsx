import * as React from "react";
import { graphql } from "gatsby";
import Utterances from "components/Utterances";
import Header from "components/Header";
import { globalStyle } from "../style";
import { Global } from "@emotion/react";
import styled from "@emotion/styled";

const PostContent = styled.main`
  width: 60%;
  max-width: 950px;
  margin: 0 auto;

  h1 {
    margin: 1.2em 0;
    padding-bottom: 0.4em;
    font-size: 1.8em;
    font-weight: 700;
    border-bottom: 1px solid #e0e0e0;
  }

  h2 {
    margin: 1em 0;
    font-size: 1.5em;
    font-weight: 700;
  }

  p {
    font-size: 1.1em;
    line-height: 1.34em;
  }

  strong {
    font-weight: 700;
  }

  ul,
  ol {
    margin: 1em 0;
    padding-left: 1em;
  }

  ul > li {
    list-style: disc;
  }

  ol > li {
    list-style: decimal;
  }

  li {
    list-style: disc;
    font-size: 1.1em;
    line-height: 1.34em;
    margin-bottom: 0.3em;
  }

  blockquote {
    background-color: #f5f5f5;
    margin: 1em 0;
  }

  blockquote p {
    padding: 0.6em 1.25em;
    border-left: 6px solid #0277bd;
    font-style: italic;
  }

  code:not(pre > code) {
    background-color: #f5f5f5 !important;
    color: #fe4365 !important;
  }

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`;

const BlogPostTemplate = ({ data }: any) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;

  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
      <PostContent>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PostContent>
      <Utterances />
    </div>
  );
};

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        category
      }
    }
  }
`;

export default BlogPostTemplate;
