import { MainNav, MainNavItem } from './styles';

function HeaderMenu() {
  return (
    <MainNav>
      <MainNavItem to="/" end>
        Home
      </MainNavItem>
      <MainNavItem to="/about">About</MainNavItem>
      <MainNavItem to="/contact-us">Contact us</MainNavItem>
      <MainNavItem to="/blog">Blog</MainNavItem>
    </MainNav>
  );
}

export default HeaderMenu;
