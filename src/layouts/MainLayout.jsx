import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import styled from '@emotion/styled';
import { Outlet } from 'react-router';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function MainLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
}

export default MainLayout;
