import CartIcon from '@assets/icons/cart-icon.svg?react';
import FavoritesIcon from '@assets/icons/favorites-icon.svg?react';
import UserIcon from '@assets/icons/user-icon.svg?react';
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
