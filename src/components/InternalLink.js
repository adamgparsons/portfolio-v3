import React from "react"
import styled from "styled-components"
import theme from "../theme"
import { Link } from "gatsby"

const InternalLink = styled(props => <Link {...props} />)`
  text-decoration: none;
  color: inherit;
  padding-bottom: 1px;
  border-bottom: 2px black solid;
  transition: background-color 0.25s;
  :hover {
    background-color: rgba(22, 12, 40, 0.8);
  }
`

export default InternalLink
