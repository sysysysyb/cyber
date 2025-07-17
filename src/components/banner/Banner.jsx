import { motion } from 'motion/react';
import ShopNowBtn from '../button/ShopNowBtn';
import * as S from './styles';

function Banner({ banner, theme, align }) {
  return (
    <S.BannerContainer
      theme={theme}
      align={align}
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <S.BannerGroup align={align}>
        <S.BannerTitle theme={theme} as={motion.h1} variants={itemVariants}>
          {banner?.titlePrefix}&nbsp;
          <b>{banner?.titleLast}</b>
        </S.BannerTitle>
        <S.BannerDesc as={motion.span} variants={itemVariants}>
          {banner?.desc}
        </S.BannerDesc>
        <motion.div variants={itemVariants}>
          <ShopNowBtn path={`/productions/${banner?.id}`} theme={theme} />
        </motion.div>
      </S.BannerGroup>
      <S.BannerImage
        src={banner?.image}
        alt={banner?.titlePrefix + banner?.titleLast}
        align={align}
        as={motion.img}
        variants={itemVariants}
      />
    </S.BannerContainer>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default Banner;
