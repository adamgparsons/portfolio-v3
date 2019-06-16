import { createGlobalStyle } from "styled-components"
import Custom from "../fonts/Custom.ttf"
import CustomBold from "../fonts/CustomBold.ttf"
import theme from "../theme"

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Custom font";
  src: local("Custom"), local("Custom"), url(${Custom}) format("truetype")
}

@font-face {
  font-family: "Custom font bold";
  src: local("CustomBold"), local("CustomBold"), url(${CustomBold}) format("truetype")
}

html,
body {
  overflow-x: hidden;
}

body {
  font-family: "Custom font", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
`

export default GlobalStyle
