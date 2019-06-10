import styled from 'styled-components';
import React, {Component} from 'react';
import CaseStudyInfo from '../components/CaseStudyInfo';
import theme from '../theme';

const Wrapper = styled.div`
  display: flex;
  margin-top: ${theme.space[7]}px;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    flex-direction: column;
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
    transform: translateX(200px);
    @media only screen and (max-width: ${theme.breakpoints[2]}) {
      transform: translateX(100px);
    }

    @media only screen and (max-width: ${theme.breakpoints[1]}) {
      transform: translateX(0px);
      margin-left: -${theme.space[2]}px;
      margin-right: -${theme.space[2]}px;
    }
  }
`;

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
          link="/casestudy/design-system"
        />
        <CaseStudyImage>
          <img src="https://placeimg.com/640/480/any" alt="Citizens Advice Design system" />
        </CaseStudyImage>{' '}
      </Wrapper>
    );
  }
}

export default DSCaseStudy;
