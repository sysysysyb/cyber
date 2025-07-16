import CartIcon from '@assets/icons/header/cart-icon.svg?react';
import FavoritesIcon from '@assets/icons/header/favorites-icon.svg?react';
import UserIcon from '@assets/icons/header/user-icon.svg?react';
import { IconNav, IconNavItem } from './Header.styles';

function HeaderIcon() {
  return (
    <IconNav>
      <IconNavItem to="/mypage/favorites">
        <FavoritesIcon />
      </IconNavItem>
      <IconNavItem to="/cart">
        <CartIcon />
      </IconNavItem>
      <IconNavItem to="/mypage/user-info">
        <UserIcon />
      </IconNavItem>
    </IconNav>
  );
}

export default HeaderIcon;
