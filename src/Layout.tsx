import { Outlet } from "react-router-dom";
import Header from "./components/organism/layouts/header/Header";
import Footer from "./components/organism/layouts/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {/* <LoadingBar/> ISSUE (handle show dynamic)*/}
    </div>
  );
};

export default Layout;
