import FavoritesIcon from '@assets/icons/header/favorites-icon.svg?react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';

export const CategoryItemContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  min-width: 10rem;
  border: 0;
  padding: 1.5rem;
  background-color: #ededed;
  aspect-ratio: 4/3;
  border-radius: 1rem;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    border: 2px solid #000;
    background-color: transparent;
    transform: scale(1.1);
    box-shadow: 0 0 20px 5px #00000025;
  }
`;

export const CategoryItemText = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
`;

function CategoryItem({ category }) {
  const { id, icon, name } = category;
  const navigate = useNavigate();

  return (
    <CategoryItemContainer onClick={() => navigate(`/category/${id}`)}>
      {icon ? <img src={icon} alt={name} /> : <FavoritesIcon />}
      <CategoryItemText>{name}</CategoryItemText>
    </CategoryItemContainer>
  );
}

export default CategoryItem;
