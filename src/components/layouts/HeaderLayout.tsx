import { Outlet } from "react-router-dom";
import { Navbar } from "../navBar/NavBar";

const HeaderLayout = () => (
    <>
        <header>
            <Navbar />
        </header>
        <Outlet />
    </>
);

export default HeaderLayout;