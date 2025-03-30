import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const LayoutPage = () => {
  return (
    <Layout>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </Layout>
  );
};

export default LayoutPage;
