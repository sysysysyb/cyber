import styled from '@emotion/styled';
import { motion } from 'motion/react';
import CategoryItem from './CategoryItem';

export const CategoryContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding: 5rem 10rem;
  background-color: #fafafa;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CategoryGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
  height: fit-content;
`;

function Category() {
  return (
    <CategoryContainer
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <CategoryTitle as={motion.h2} variants={itemVariants}>
        Browse By Category
      </CategoryTitle>
      <CategoryGroup as={motion.div} variants={itemVariants}>
        {CATEGORY_LIST.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </CategoryGroup>
    </CategoryContainer>
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
