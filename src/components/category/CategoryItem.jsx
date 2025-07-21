import FavoritesIcon from '@assets/icons/header/favorites-icon.svg?react';
import { useNavigate } from 'react-router';
import * as S from './styles';

function CategoryItem({ category }) {
  const { id, icon, name } = category;
  const navigate = useNavigate();

  return (
    <S.CategoryItemContainer onClick={() => navigate(`/category/${id}`)}>
      {icon ? <img src={icon} alt={name} /> : <FavoritesIcon />}
      <S.CategoryItemText>{name}</S.CategoryItemText>
    </S.CategoryItemContainer>
  );
}

export default CategoryItem;
