import logoBlack from '@assets/logos/logo-black.png';
import { Container, Logo, LogoImg, NavWrap } from './Header.styles';
import HeaderIcon from './HeaderIcon';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';

function Header() {
  return (
    <Container>
      <Logo to="/">
        <LogoImg src={logoBlack} alt="logo" />
      </Logo>
      <HeaderSearch />
      <NavWrap>
        <HeaderMenu />
        <HeaderIcon />
      </NavWrap>
    </Container>
  );
}

export default Header;
