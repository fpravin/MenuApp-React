import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/foo">Foo</Link>
      <Link to="/bar">Bar</Link>
    </div>
  );
}

export default Navbar;
