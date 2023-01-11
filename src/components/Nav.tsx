import { Outlet, Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link to="/">Anasayfa</Link>
          </li>
          <li>
            <Link to="/addreport">Form ekle</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};

export default Nav;