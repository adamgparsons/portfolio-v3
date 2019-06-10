import styled from 'styled-components';
import theme from '../theme';

const Wrapper = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  @media only screen and (max-width: ${theme.breakpoints[2]}) {
    padding-left: ${theme.space[2]}px;
    padding-right: ${theme.space[2]}px;
  }
`;

export default Wrapper;
