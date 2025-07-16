import logoBlack from '@assets/logos/logo-black.png';
import HeaderIcon from './HeaderIcon';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <S.Logo to="/">
        <S.LogoImg src={logoBlack} alt="logo" />
      </S.Logo>
      <HeaderSearch />
      <S.NavWrap>
        <HeaderMenu />
        <HeaderIcon />
      </S.NavWrap>
    </S.Container>
  );
}

export default Header;
