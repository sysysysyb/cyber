import { motion } from 'motion/react';
import CategoryItem from './CategoryItem';
import * as S from './styles';

function Category() {
  return (
    <S.CategoryContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <S.CategoryTitle as={motion.h2} variants={itemVariants}>
        Browse By Category
      </S.CategoryTitle>
      <S.CategoryGroup as={motion.div} variants={itemVariants}>
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </S.CategoryGroup>
    </S.CategoryContainer>
  );
}

const CATEGORY_LIST = [
  {
    id: 0,
    icon: '',
    name: 'Electronics',
  },
  {
    id: 1,
    icon: '',
    name: 'Fashion',
  },
  {
    id: 2,
    icon: '',
    name: 'Accessories',
  },
  {
    id: 3,
    icon: '',
    name: 'Housewares',
  },
  {
    id: 4,
    icon: '',
    name: 'Cosmetics',
  },
  {
    id: 5,
    icon: '',
    name: 'Lifestyle',
  },
];

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

export default Category;
