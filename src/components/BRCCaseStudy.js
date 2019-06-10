import styled from 'styled-components';
import React, {Component} from 'react';
import CaseStudyInfo from './CaseStudyInfo';
import theme from '../theme';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: ${theme.space[7]}px;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    flex-direction: column-reverse;
    margin-top: ${theme.space[6]}px;
  }
`;

const CaseStudyImage = styled.div`
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    margin-top: ${theme.space[6]}px;
  }
  @media only screen and (max-width: ${theme.breakpoints[2]}) {
    max-width: 50%;
  }
  img {
    transform: translateX(-200px);
    z-index: 1000;
    @media only screen and (max-width: ${theme.breakpoints[2]}) {
      transform: translateX(-300px);
    }

    @media only screen and (max-width: ${theme.breakpoints[1]}) {
      transform: translateX(0px);
      margin-left: -${theme.space[2]}px;
      margin-right: -${theme.space[2]}px;
    }
  }
`;

class BRCCaseStudy extends Component {
  render() {
    return (
      <Wrapper>
        <CaseStudyImage>
          <img src="https://placeimg.com/640/480/any" alt="British Red Cross wheelchair service" />
        </CaseStudyImage>
        <CaseStudyInfo
          companyName="British Red Cross"
          caseStudyName="Wheelchair service"
          description="Using service design to transform the 100 year-old mobility aid service."
          link="/casestudy/wheelchair-service"
        />
      </Wrapper>
    );
  }
}

export default BRCCaseStudy;
