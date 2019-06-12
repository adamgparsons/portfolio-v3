import styled from "styled-components"
import React, { Component } from "react"
import CaseStudyInfo from "../components/CaseStudyInfo"
import theme from "../theme"
import dsmockup from "../images/citizen_advice_mockup.png"

const Wrapper = styled.div`
  display: flex;
  margin-top: ${theme.space[7]}px;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    flex-direction: column;
  }
`

const ImageHolder = styled.div`
  background-color: ${theme.colors.lightBlue};
  padding-left: ${theme.space[4]}px;
  padding-right: ${theme.space[4]}px;
  padding-top: ${theme.space[5]}px;

  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    transform: translateX(0px);
    margin-left: -${theme.space[2]}px;
    margin-right: -${theme.space[2]}px;
  }
  @media only screen and (max-width: ${theme.breakpoints[2]}) {
    transform: translateX(0px);
    overflow: visible;
  }
  img {
    max-width: 100%;
    @media only screen and (max-width: ${theme.breakpoints[1]}) {
      // width: 500px;
    }
  }
`

const CaseStudyImage = styled.div`
  max-width: 50%;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    margin-top: ${theme.space[6]}px;
    max-width: 100%;
  }
  @media only screen and (max-width: ${theme.breakpoints[2]}) {
  }
`

class DSCaseStudy extends Component {
  render() {
    return (
      <Wrapper>
        <CaseStudyInfo
          companyName="Citizens Advice"
          caseStudyName="Design system"
          description="Creating a design system to improve consitency, accessibility and
      performance
      for users.
      "
          link="/case-studies/CA-design-system"
        />
        <CaseStudyImage>
          <ImageHolder>
            <img src={dsmockup} alt="Citizens Advice Design system" />
          </ImageHolder>
        </CaseStudyImage>
      </Wrapper>
    )
  }
}

export default DSCaseStudy
