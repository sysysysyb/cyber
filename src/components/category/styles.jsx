import styled from '@emotion/styled';

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
