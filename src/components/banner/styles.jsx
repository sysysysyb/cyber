import styled from '@emotion/styled';

export const BannerContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: ${(props) => props.align === 'right' && 'flex-end'}; // props
  align-items: center;
  width: 100%;
  height: 600px;
  padding: 10%;
  background-color: ${(props) => props.theme.bgColor || '#fff'};
`;

export const BannerGroup = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align === 'right' && 'flex-end'}; // props
  gap: 1.5rem;
  width: fit-content;
  max-width: 66%;
  text-align: ${(props) => props.align === 'right' && 'right'}; // props
`;

export const BannerTitle = styled.h1`
  margin: 0;
  font-size: 6rem;
  font-weight: 100;
  color: ${(props) => props.theme.textColor || '#000'};

  & > b {
    font-weight: 600;
  }
`;

export const BannerDesc = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5rem;
  color: #909090;
`;

export const BannerImage = styled.img`
  position: absolute;
  height: 100%;
  ${(props) => (props.align === 'right' ? 'left' : 'right')}: 0; // props
`;
