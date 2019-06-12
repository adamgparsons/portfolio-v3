import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import theme from "../theme"

const MarkdownStyles = styled.div`
  margin-bottom: ${theme.space[7]}px;

  & h1 {
    ${theme.textStyles.heading1};
    margin-top: ${theme.space[6]}px;
    margin-bottom: ${theme.space[5]}px;
  }
  & h2 {
    ${theme.textStyles.heading2};
    margin-top: ${theme.space[6]}px;
    margin-bottom: ${theme.space[3]}px;
  }

  & h3 {
    ${theme.textStyles.body};
    font-weight: bold;
    margin-top: 30px;
    margin-bottom: ${theme.space[1]}px;
  }

  & p {
    ${theme.textStyles.body};
    color: ${theme.colors.midGray};
    margin-bottom: ${theme.space[3]}px;
  }

  & blockquote {
    margin-top: ${theme.space[5]}px;
    margin-bottom: ${theme.space[6]}px;
  }

  & blockquote p {
    color: ${theme.colors.midGray};
    font-style: italic;
  }
  & a {
    text-decoration: underline;
    color: inherit;
    transition: background-color 0.25s;
    :hover {
      background-color: ${theme.colors.lightGreen};
    }
  }
  img {
    max-width: 1000px;
    margin-top: ${theme.space[5]}px;
    margin-bottom: ${theme.space[5]}px;
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <MarkdownStyles>
        <h1>{frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </MarkdownStyles>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
