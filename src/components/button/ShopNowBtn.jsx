import styled from '@emotion/styled';
import { Link } from 'react-router';

const ShopNowBtnContainer = styled.div`
  padding: 1rem 3.5rem;
  border: 1px solid ${(props) => props.theme.textColor || '#000'};
  color: ${(props) => props.theme.textColor || '#000'};
  font-weight: 500;
  border-radius: 0.375rem;
  transition: 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.textColor || '#000'};
    color: ${(props) => props.theme.bgColor || '#fff'};
  }
`;

const ShopNowBtnLink = styled(Link)`
  width: fit-content;
  height: fit-content;
  text-decoration: none;
`;

function ShopNowBtn({ path, theme }) {
  return (
    <ShopNowBtnLink to={path}>
      <ShopNowBtnContainer theme={theme}>Shop Now</ShopNowBtnContainer>
    </ShopNowBtnLink>
  );
}

export default ShopNowBtn;
