import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import {Link} from 'gatsby';

const Button = styled(props => <Link {...props} />)`
  font-size: ${theme.fontSizes[0]}px
  line-height: 16px;
  background-color:${theme.colors.gray};
  padding: 12px ${theme.space[4]}px;
  margin-top: ${theme.space[5]}px;
  color: ${theme.colors.white};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  transition: background-color 0.5s;
  :hover {
    background-color: ${theme.colors.darkGray}
  }

`;

export default Button;
