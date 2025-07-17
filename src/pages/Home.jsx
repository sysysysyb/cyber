import BannerList from '@/components/banner/BannerList';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

function Home() {
  return (
    <Container>
      {/* <div>Home</div> */}
      <BannerList />
    </Container>
  );
}

export default Home;
