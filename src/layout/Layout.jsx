import { Outlet } from "react-router-dom";
import NavBar from "../components/header/NavBar";
import Footer from "../components/footer/Footer";
const Layout = () => {
  return (
    <>
      <div className="">
        <NavBar />
        <main className="">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
