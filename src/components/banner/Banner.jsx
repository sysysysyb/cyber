import ShopNowBtn from '../button/ShopNowBtn';
import * as S from './styles';

function Banner({ banner, theme, align }) {
  console.log(theme);
  return (
    <S.BannerContainer theme={theme} align={align}>
      <S.BannerGroup align={align}>
        <S.BannerTitle theme={theme}>
          {banner?.titlePrefix}&nbsp;
          <b>{banner?.titleLast}</b>
        </S.BannerTitle>
        <S.BannerDesc>{banner?.desc}</S.BannerDesc>
        <ShopNowBtn path={`/productions/${banner?.id}`} theme={theme} />
      </S.BannerGroup>
      <S.BannerImage
        src={banner?.image}
        alt={banner?.titlePrefix + banner?.titleLast}
        align={align}
      />
    </S.BannerContainer>
  );
}

export default Banner;
