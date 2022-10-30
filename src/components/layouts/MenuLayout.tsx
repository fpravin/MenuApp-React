import { Outlet } from "react-router-dom";

function MenuLayout() {
  return (
    <>
      <header>
        <h1>MENU</h1>
      </header>
      <Outlet />
    </>
  );
}

export default MenuLayout;
