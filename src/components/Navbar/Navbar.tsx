import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaUserAstronaut, FaSun, FaStar } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="logo-container">
        Our Logo - 
        <FaSun />
        <FaStar />
        <FaUserAstronaut />
      </div>
      <nav className="nav-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/homeworks">Homeworks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
