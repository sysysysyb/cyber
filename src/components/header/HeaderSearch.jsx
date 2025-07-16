import { SearchInput, SearchWrap, StyledSearchIcon } from './styles';

function HeaderSearch() {
  return (
    <SearchWrap>
      <StyledSearchIcon />
      <SearchInput type="text" placeholder="Search" />
    </SearchWrap>
  );
}

export default HeaderSearch;
