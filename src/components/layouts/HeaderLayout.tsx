import { Outlet } from "react-router-dom";
import Navbar from "../navBar/NavBar";

function HeaderLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </>
  );
}

export default HeaderLayout;
