import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyles';
import ShopTheme from './styles/ShopTheme';
import CenteredContainer from './styles/CenteredContainer';
import Meta from './Meta';
import Header from './Header';

const Layout = (props) => (
  <ThemeProvider theme={ShopTheme}>
    <>
      <GlobalStyle />
      <Meta />
      <Header />
      <CenteredContainer>
        {props.children}
      </CenteredContainer>
    </>
  </ThemeProvider>
);

export default Layout;