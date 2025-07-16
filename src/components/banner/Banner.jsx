import { useBanners } from '@/hooks/useBanner';
import styled from '@emotion/styled';

const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row; // props -> row 또는 row-reverse & mobile일 때는 column 또는 column reverse
  align-items: center;
  width: 100%;
  height: 600px;
  padding: 10%;
  background-color: #211c24; // props
`;

const BannerGroup = styled.div`
  flex-basis: 55%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const BannerTitle = styled.h1`
  margin: 0;
  font-size: 6rem; // props
  font-weight: 100;
  color: #fff; // props

  & > b {
    font-weight: 600;
  }
`;

const BannerDesc = styled.span`
  font-size: 1.125rem; // props - 기본을 14px로
  font-weight: 500;
  line-height: 1.5rem;
  color: #909090;
`;

const BannerImage = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
`;

const productIds = [123, 122, 121];

function Banner() {
  const { banners } = useBanners(productIds);

  return (
    <BannerContainer>
      <BannerGroup>
        <BannerTitle>
          {banners[0]?.titlePrefix}&nbsp;
          <b>{banners[0]?.titleLast}</b>
        </BannerTitle>
        <BannerDesc>{banners[0]?.desc}</BannerDesc>
        <button>Shop Now</button>
      </BannerGroup>
      <BannerImage src={banners[0]?.image} alt={banners[0]?.title} />
    </BannerContainer>
  );
}

export default Banner;
