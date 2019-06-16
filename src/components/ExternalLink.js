import styled from "styled-components"
import theme from "../theme"

const ExternalLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: background-color 0.25s, border-bottom 0.25s;
  :hover {
    /* background-color: rgba(22, 12, 40, 0.2); */
    border-bottom: 2px black solid;
  }
`

export default ExternalLink
