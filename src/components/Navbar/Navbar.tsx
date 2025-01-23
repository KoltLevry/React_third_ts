import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="logo-container">Logo</div>
      <nav className="nav-container">
        <ul>
          <li>Home</li>
          <li>Lessons</li>
          <li>Homeworks</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
