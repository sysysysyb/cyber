import CartIcon from '@assets/icons/header/cart-icon.svg?react';
import FavoritesIcon from '@assets/icons/header/favorites-icon.svg?react';
import UserIcon from '@assets/icons/header/user-icon.svg?react';
import * as S from './styles';

function HeaderIcon() {
  return (
    <S.IconNav>
      <S.IconNavItem to="/mypage/favorites">
        <FavoritesIcon />
      </S.IconNavItem>
      <S.IconNavItem to="/cart">
        <CartIcon />
      </S.IconNavItem>
      <S.IconNavItem to="/mypage/user-info">
        <UserIcon />
      </S.IconNavItem>
    </S.IconNav>
  );
}

export default HeaderIcon;
