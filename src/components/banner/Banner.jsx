import styled from '@emotion/styled';

const BannerContainer = styled.div`
  display: flex;
  flex-direction: row; // props -> row 또는 row-reverse & mobile일 때는 column 또는 column reverse
  gap: 1rem; // props -> ex) title 폰트 크기의 6 분의 1
  width: 100%;
  height: 100%;
  padding: 10%;
  background-color: pink; // props
`;

const BannerGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: skyblue;
`;

const BannerTitle = styled.h1`
  font-size: 6rem; // props
  font-weight: 100;
  color: #fff; // props

  & > b {
    font-weight: 600;
  }
`;

const BannerDesc = styled.h1`
  font-size: 1.125rem; // props - 기본을 14px로
  font-weight: 500;
  color: #909090;
`;

const BannerImage = styled.h1``;

function Banner() {
  return (
    <BannerContainer>
      <BannerGroup>
        <BannerTitle>
          IPhone 14 <b>PRO</b>
        </BannerTitle>
        <BannerDesc>Created to change everything for the better. For everyone</BannerDesc>
        <button>Shop Now</button>
      </BannerGroup>
      <BannerImage src="*" />
    </BannerContainer>
  );
}

export default Banner;
