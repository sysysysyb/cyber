import * as S from './styles';

function HeaderMenu() {
  return (
    <S.MainNav>
      <S.MainNavItem to="/" end>
        Home
      </S.MainNavItem>
      <S.MainNavItem to="/about">About</S.MainNavItem>
      <S.MainNavItem to="/contact-us">Contact us</S.MainNavItem>
      <S.MainNavItem to="/blog">Blog</S.MainNavItem>
  );
}

export default HeaderMenu;
