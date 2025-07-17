import ShopNowBtn from '../button/ShopNowBtn';
import { BannerContainer, BannerDesc, BannerGroup, BannerImage, BannerTitle } from './styles';

function Banner({ banner, theme, align }) {
  console.log(theme);
  return (
    <BannerContainer theme={theme} align={align}>
      <BannerGroup align={align}>
        <BannerTitle theme={theme}>
          {banner?.titlePrefix}&nbsp;
          <b>{banner?.titleLast}</b>
        </BannerTitle>
        <BannerDesc>{banner?.desc}</BannerDesc>
        <ShopNowBtn path={`/productions/${banner?.id}`} theme={theme} />
      </BannerGroup>
      <BannerImage
        src={banner?.image}
        alt={banner?.titlePrefix + banner?.titleLast}
        align={align}
      />
    </BannerContainer>
  );
}

export default Banner;
