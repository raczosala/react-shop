import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import Logo from './Logo';
import Nav from './Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};


const StyledHeader = styled.header`
  border-bottom: 5px solid ${props => props.theme.black};
  display: flex;
  justify-content: space-between;
`;

const Header = () => (
  <StyledHeader>
    <Logo />
    <Nav />
  </StyledHeader>
);

export default Header;