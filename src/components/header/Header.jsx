import logoBlack from '@assets/logos/logo-black.png';
import HeaderIcon from './HeaderIcon';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import { Container, Logo, LogoImg, NavWrap } from './styles';

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
