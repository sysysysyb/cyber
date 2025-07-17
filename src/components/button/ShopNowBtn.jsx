import * as S from './styles';

function ShopNowBtn({ path, theme }) {
  return (
    <S.ShopNowBtnLink to={path}>
      <S.ShopNowBtnContainer theme={theme}>Shop Now</S.ShopNowBtnContainer>
    </S.ShopNowBtnLink>
  );
}

export default ShopNowBtn;
