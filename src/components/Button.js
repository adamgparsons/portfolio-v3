import React from "react"
import styled from "styled-components"
import theme from "../theme"
import { Link } from "gatsby"

const Button = styled(props => <Link {...props} />)`
  font-size: ${theme.fontSizes[1]}px;
  font-weight: 400;
  line-height: 16px;
  background-color:${theme.colors.gray};
  padding: 12px 32px;
  margin-top: ${theme.space[5]}px;
  color: ${theme.colors.white};
  // text-transform: uppercase;
  text-decoration: none;
  // letter-spacing: 2px;
  transition: background-color 0.5s;
  :hover {
    background-color: rgb(22,12,40);
    // color: ${theme.colors.darkGray};
  }

`

export default Button
