import styled from 'styled-components';
import Link from 'next/link';

const StyledNav = styled.nav`
  display: flex;
  a {
    text-transform: uppercase;
    padding: 0 3rem;
    position: relative;
    cursor: pointer;
    font-weight: 600;
    display: flex;
    align-items: center;

    &:before {
      content: '';
      width: 2px;
      background: ${props => props.theme.lightGrey};
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: red;
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 1rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 90px);
      }
    }
  }
`;

const Nav = () => (
  <StyledNav>
    <Link href ="/">
      <a>Shop</a>
    </Link>
    <Link href ="/">
      <a>Orders</a>
    </Link>
    <Link href ="/about">
      <a>My account</a>
    </Link>
    <Link href ="/about">
      <a>Sing out</a>
    </Link>
    <Link href ="/about">
      <a>My cart</a>
    </Link>
  </StyledNav>
);

export default Nav;