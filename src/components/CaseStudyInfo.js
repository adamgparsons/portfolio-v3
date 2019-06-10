import styled from 'styled-components';
import React, {Component} from 'react';
import theme from '../theme';
import Button from './Button';
import Fade from 'react-reveal/Fade';

const InfoWrapper = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (max-width: ${theme.breakpoints[1]}) {
    max-width: 100%;
  }
`;

const CompanyName = styled.h2`
  ${theme.textStyles.heading2}
  display:block;
`;

const CaseStudyName = styled.h3`
  ${theme.textStyles.heading1}
  display:block;
`;

const CaseStudyDescription = styled.p`
  ${theme.textStyles.body}
  display:block;
  line-height: 28px;
  margin-top: ${theme.space[5]}px;
  margin-bottom: ${theme.space[6]}px;
`;

class CaseStudyInfo extends Component {
  render() {
    const companyName = this.props.companyName;
    const caseStudyName = this.props.caseStudyName;
    const description = this.props.description;
    const link = this.props.link;
    return (
      <InfoWrapper>
        <Fade bottom>
          <div>
            <CompanyName> {companyName} </CompanyName>
            <CaseStudyName> {caseStudyName} </CaseStudyName>
            <CaseStudyDescription> {description} </CaseStudyDescription>
            <Button to={link}>View case study</Button>
          </div>
        </Fade>
      </InfoWrapper>
    );
  }
}

export default CaseStudyInfo;
