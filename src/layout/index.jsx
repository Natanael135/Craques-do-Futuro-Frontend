import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Layout = styled.div`
  @media (min-width: 320px) {
    margin: 0 1rem 0 1rem;
  }
  @media (min-width: 1024px) {
    margin: 0 4rem 0 4rem;
  }
  @media (min-width: 1920px) {
    margin: 0 8rem 0 8rem;
  }
  @media (min-width: 2560px) {
    margin: 0 20rem 0 20rem;
  }
`;
const LayoutPage = () => {
  return (
    <>
      <Layout>
        <Header />
        <Outlet />
        <Footer />
      </Layout>
    </>
  );
};

export default LayoutPage;