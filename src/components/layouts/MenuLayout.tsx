import { Outlet } from "react-router-dom";

function MenuLayout() {
  return (
    <>
      <header>
        <h1>MENU</h1>
        <h2>MENU</h2>
        <h3>MENU</h3>
        <h4>MENU</h4>
        <h5>MENU</h5>
        <h6>MENU</h6>
        <p>MENU</p>
      </header>
      <Outlet />
    </>
  );
}

export default MenuLayout;
