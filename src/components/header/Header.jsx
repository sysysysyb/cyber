import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink;
`;

function Header() {
  return (
    <Container>
      <div>Header</div>
    </Container>
  );
}

export default Header;
