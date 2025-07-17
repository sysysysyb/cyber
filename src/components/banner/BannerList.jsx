import Banner from '@/components/banner/Banner';
import { useBanners } from '@/hooks/useBanners';
import styled from '@emotion/styled';

const BannerGridContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function BannerGrid() {
  const { banners } = useBanners(PRODUCT_IDS);
  console.log(banners);

  return (
    <BannerGridContainer>
      {banners.map((banner, idx) => (
        <Banner
          key={banner.id}
          banner={banner}
          theme={BANNER_THEMES[idx % 3]}
          align={idx % 2 ? 'right' : 'left'}
        />
      ))}
    </BannerGridContainer>
  );
}

// 아이폰 13 프로, 맥북 에어, 아이패드 미니, 애플 워치, 에어팟 프로
const PRODUCT_IDS = [123, 78, 159, 106, 101];

// 색상 테마 - dark, gray, light
const BANNER_THEMES = [
  {
    label: 'dark',
    bgColor: '#211c24',
    textColor: '#fff',
  },
  {
    label: 'gray',
    bgColor: '#ededed',
    textColor: '#000',
  },
  {
    label: 'light',
    bgColor: '#fff',
    textColor: '#000',
  },
];

export default BannerGrid;
