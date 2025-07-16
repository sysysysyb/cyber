import FacebookIcon from '@assets/icons/footer/facebook-icon.svg?react';
import InstagramIcon from '@assets/icons/footer/instagram-icon.svg?react';
import TiktokIcon from '@assets/icons/footer/tiktok-icon.svg?react';
import TwitterIcon from '@assets/icons/footer/twitter-icon.svg?react';
import logoWhite from '@assets/logos/logo-white.png';
import styled from '@emotion/styled';
import { Link } from 'react-router';

const FooterContainer = styled.div`
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

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLogoSection = styled(FooterSection)`
  flex-basis: 40%;
  min-width: 240px;
`;

const FooterMenuSection = styled(FooterSection)`
  flex-basis: 20%;
  min-width: fit-content;
`;

const Logo = styled(Link)`
  width: fit-content;
  line-height: 0;
`;

const LogoImg = styled.img``;

const FooterDesc = styled.p`
  font-weight: 500;
  line-height: 170%;
`;

const FooterMenuTitle = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
`;

const FooterMenuItem = styled.span`
  font-weight: 300;
  cursor: pointer;
`;

const FooterSocialSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 173px;
  height: fit-content;

  & > svg {
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogoSection>
        <Logo>
          <LogoImg src={logoWhite} alt="logo" />
        </Logo>
        <FooterDesc>
          We are a residential interior design firm located in Portland. Our boutique-studio offers
          more than
        </FooterDesc>
      </FooterLogoSection>
      <FooterMenuSection>
        <FooterMenuTitle>Services</FooterMenuTitle>
        <FooterMenuItem>Bonus program</FooterMenuItem>
        <FooterMenuItem>Gift cards</FooterMenuItem>
        <FooterMenuItem>Credit and payment</FooterMenuItem>
        <FooterMenuItem>Service contracts</FooterMenuItem>
        <FooterMenuItem>Non-cash account</FooterMenuItem>
        <FooterMenuItem>Payment</FooterMenuItem>
      </FooterMenuSection>
      <FooterMenuSection>
        <FooterMenuTitle>Assistance to the buyer</FooterMenuTitle>
        <FooterMenuItem>Find an order</FooterMenuItem>
        <FooterMenuItem>Terms of delivery</FooterMenuItem>
        <FooterMenuItem>Exchange and return of goods</FooterMenuItem>
        <FooterMenuItem>Guarantee</FooterMenuItem>
        <FooterMenuItem>Frequently asked questions</FooterMenuItem>
        <FooterMenuItem>Terms of use of the site</FooterMenuItem>
      </FooterMenuSection>
      <FooterSocialSection>
        <TwitterIcon />
        <TiktokIcon />
        <InstagramIcon />
        <FacebookIcon />
      </FooterSocialSection>
    </FooterContainer>
  );
}

export default Footer;
