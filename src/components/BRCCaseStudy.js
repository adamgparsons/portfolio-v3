import styled from "styled-components"
import React, { Component } from "react"
import CaseStudyInfo from "./CaseStudyInfo"
import theme from "../theme"
import brcmockup from "../images/red-cross-mock-up-phone.png"

const Wrapper = styled.div`
  display: flex;
  margin-top: ${theme.space[6]}px;
  margin-bottom: ${theme.space[7]}px;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    margin-top: ${theme.space[6]}px;
    flex-direction: column;
  }
`
const ImageHolder = styled.div`
  background-color: ${theme.colors.lightYellow};
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
    vertical-align: middle;
    vertical-align: -webkit-baseline-middle @media only screen and
      (max-width: ${theme.breakpoints[1]}) {
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

class BRCCaseStudy extends Component {
  render() {
    return (
      <Wrapper>
        <CaseStudyInfo
          companyName="British Red Cross"
          caseStudyName="Wheelchair service"
          description="Using service design to transform the 100 year-old mobility aid service."
          link="/case-studies/brc"
        />
        <CaseStudyImage>
          <ImageHolder>
            <img src={brcmockup} alt="British Red Cross wheelchair service" />
          </ImageHolder>
        </CaseStudyImage>
      </Wrapper>
    )
  }
}

export default BRCCaseStudy
