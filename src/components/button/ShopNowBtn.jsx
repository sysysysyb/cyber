import { ShopNowBtnContainer, ShopNowBtnLink } from './styles';

function ShopNowBtn({ path, theme }) {
  return (
    <ShopNowBtnLink to={path}>
      <ShopNowBtnContainer theme={theme}>Shop Now</ShopNowBtnContainer>
    </ShopNowBtnLink>
  );
}

export default ShopNowBtn;
