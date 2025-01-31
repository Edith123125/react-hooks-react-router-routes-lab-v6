import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/directors"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Directors
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
