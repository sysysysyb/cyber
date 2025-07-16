import styled from '@emotion/styled';
import { Link } from 'react-router';

export const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 5rem;
  width: 100%;
  height: 100%;
  padding: 6.5rem 10rem;
  background-color: #000;
  color: #cfcfcf;
  font-size: 0.875rem;
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterLogoSection = styled(FooterSection)`
  flex-basis: 40%;
  min-width: 240px;
`;

export const FooterMenuSection = styled(FooterSection)`
  flex-basis: 20%;
  min-width: fit-content;
`;

export const Logo = styled(Link)`
  width: fit-content;
  line-height: 0;
`;

export const LogoImg = styled.img``;

export const FooterDesc = styled.p`
  font-weight: 500;
  line-height: 170%;
`;

export const FooterMenuTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;

export const FooterMenuItem = styled.span`
  font-weight: 300;
  cursor: pointer;
`;

export const FooterSocialSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 173px;
  height: fit-content;

  & > svg {
    cursor: pointer;
  }
`;
