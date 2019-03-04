
import Link from 'next/link';
import styled from 'styled-components';

const StyledLogo = styled.h1`
margin: 2rem 0 2rem 2rem;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: white;
    text-transform: uppercase;
  }
`;

const Logo = () => (
  <StyledLogo>
    <Link href="/">
      <a>React Shop!</a>
    </Link>
  </StyledLogo>
);

export default Logo;