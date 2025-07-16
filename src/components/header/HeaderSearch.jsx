import * as S from './styles';

function HeaderSearch() {
  return (
    <S.SearchWrap>
      <S.StyledSearchIcon />
      <S.SearchInput type="text" placeholder="Search" />
    </S.SearchWrap>
  );
}

export default HeaderSearch;
