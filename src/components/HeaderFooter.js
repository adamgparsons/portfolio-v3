import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import theme from '../theme';
import ExternalLink from '../components/ExternalLink';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: ${theme.space[5]}px;
  padding-bottom: ${theme.space[5]}px;
  @media only screen and (max-width: ${theme.breakpoints[0]}) {
    display: block;
    padding-top: ${theme.space[3]}px;
  }
`;

const Logo = styled(props => <Link {...props} />)`
  color: ${theme.colors.black90};
  padding-top: ${theme.space[1]}px;
  text-decoration: none;
  height: 28px;
  ${theme.textStyles.body}
  padding-bottom: 1px;
  border-bottom: 2px white solid;
  transition: border-bottom 0.5s, background-color 0.5s;
  :hover {
    border-bottom: 2px black solid;
    background-color: ${theme.colors.lightGreen};
  }
`;

const ContactDetails = styled.div`
  ${theme.textStyles.body}
  @media only screen and (max-width: 600px) {
    margin-top: ${theme.space[2]}px;
  }
`;

const Email = styled.div`
  display: block;
  margin-bottom: ${theme.space[2]}px;
`;

const PhoneNumber = styled.div`
  display: block;
  text-decoration: none;
`;

const HeaderFooter = () => {
  return (
    <Wrapper>
      <Logo to="/">Adam Parsons</Logo>
      <ContactDetails>
        <Email>
          <ExternalLink href="mailto:adamgeorgeparsons@gmail.com">
            adamgeorgeparsons@gmail.com
          </ExternalLink>
        </Email>

        <PhoneNumber>+44 7498 703 696</PhoneNumber>
      </ContactDetails>
    </Wrapper>
  );
};
export default HeaderFooter;
