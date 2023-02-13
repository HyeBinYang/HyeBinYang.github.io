import * as React from "react";
import { graphql } from "gatsby";
import Utterances from "components/Utterances";
import Header from "components/Header";
import { globalStyle } from "../style";
import { Global } from "@emotion/react";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Global styles={globalStyle} />
      <Header />
      <main
        css={{
          maxWidth: "780px",
          margin: "0 auto",
          padding: "0 1.5em",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <Utterances />
    </div>
  );
}

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
