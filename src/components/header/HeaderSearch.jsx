import { SearchInput, SearchWrap, StyledSearchIcon } from './Header.styles';

function HeaderSearch() {
  return (
    <SearchWrap>
      <StyledSearchIcon />
      <SearchInput type="text" placeholder="Search" />
    </SearchWrap>
  );
}

export default HeaderSearch;
