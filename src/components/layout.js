/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import HeaderFooter from "./HeaderFooter"
import Wrapper from "./Wrapper"
import GlobalStyle from "./GlobalStyle"
import useSiteMetadata from "./SiteMetadata"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <GlobalStyle />
        <Wrapper>
          <Helmet>
            <html lang="en" />
            <title>Adam Parsons</title>
            <meta name="description" content="description" />

            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/images/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/png"
              href="/images/favicon-32x32.png"
              sizes="32x32"
            />
            <link
              rel="icon"
              type="image/png"
              href="/images/favicon-16x16.png"
              sizes="16x16"
            />

            <link
              rel="mask-icon"
              href="/images/safari-pinned-tab.svg"
              color="#ff4400"
            />
            <meta name="theme-color" content="#fff" />

            <meta property="og:type" content="business.business" />
            <meta property="og:title" content="Adam Parsons" />
            <meta property="og:url" content="/" />
            <meta property="og:image" content="/img/og-image.jpg" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1,maximum-scale=1"
            />
          </Helmet>
          <HeaderFooter />
          <div>{children}</div>
          <HeaderFooter />
        </Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
