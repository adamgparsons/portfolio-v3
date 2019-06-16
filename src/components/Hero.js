import React, { Component } from "react"
import styled from "styled-components"
import theme from "../theme"

const Wrapper = styled.div`
  margin-top: ${theme.space[7]}px;
  margin-bottom: ${theme.space[6]}px;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    margin-top: ${theme.space[6]}px;
  }
`

const TagLine = styled.h2`
  ${theme.textStyles.heading2};
  font-family: "Custom font bold";
`

const Description = styled.div`
  ${theme.textStyles.heading2}
  font-size: 30px;
  line-height: 46px;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    ${theme.textStyles.heading3}
  }
`

class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <TagLine>I'm Adam, a UX Designer based in London.</TagLine>
        <Description>
          <p>
            I focus on solving real world problems for users. I help companies
            do this by researching, designing and validating with users.
          </p>
          <p>
            I currently work at Citizens Advice designing a platform that will
            provide advice to over 5 million UK citizens per year. I was
            previously working at British Red Cross redesigning their wheelchair
            service.
          </p>
        </Description>
      </Wrapper>
    )
  }
}

export default Hero
