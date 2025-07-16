import FacebookIcon from '@assets/icons/footer/facebook-icon.svg?react';
import InstagramIcon from '@assets/icons/footer/instagram-icon.svg?react';
import TiktokIcon from '@assets/icons/footer/tiktok-icon.svg?react';
import TwitterIcon from '@assets/icons/footer/twitter-icon.svg?react';
import logoWhite from '@assets/logos/logo-white.png';
import * as S from './styles';

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterLogoSection>
        <S.Logo>
          <S.LogoImg src={logoWhite} alt="logo" />
        </S.Logo>
        <S.FooterDesc>
          We are a residential interior design firm located in Portland. Our boutique-studio offers
          more than
        </S.FooterDesc>
      </S.FooterLogoSection>
      <S.FooterMenuSection>
        <S.FooterMenuTitle>{SERVICES_DATA.title}</S.FooterMenuTitle>
        {SERVICES_DATA.items.map((item, idx) => (
          <S.FooterMenuItem key={idx}>{item}</S.FooterMenuItem>
        ))}
      </S.FooterMenuSection>
      <S.FooterMenuSection>
        <S.FooterMenuTitle>{ASSISTANCE_DATA.title}</S.FooterMenuTitle>
        {ASSISTANCE_DATA.items.map((item, idx) => (
          <S.FooterMenuItem key={idx}>{item}</S.FooterMenuItem>
        ))}
      </S.FooterMenuSection>
      <S.FooterSocialSection>
        <TwitterIcon />
        <TiktokIcon />
        <InstagramIcon />
        <FacebookIcon />
      </S.FooterSocialSection>
    </S.FooterContainer>
  );
}

const SERVICES_DATA = {
  title: 'Services',
  items: [
    'Bonus program',
    'Gift cards',
    'Credit and payment',
    'Service contracts',
    'Non-cash account',
    'Payment',
  ],
};

const ASSISTANCE_DATA = {
  title: 'Assistance to the buyer',
  items: [
    'Find an order',
    'Terms of delivery',
    'Exchange and return of goods',
    'Guarantee',
    'Frequently asked questions',
    'Terms of use of the site',
  ],
};

export default Footer;
