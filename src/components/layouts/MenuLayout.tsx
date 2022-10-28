import { Outlet } from "react-router-dom";

const MenuLayout = () => (
    <>
        <header>
            <h1>MENU</h1>
        </header>
        <Outlet />
    </>
);

export default MenuLayout;