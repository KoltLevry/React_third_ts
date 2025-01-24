import { Outlet, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-numbers-container">
      <div className="homepage-title">Welcome to the Home Page!</div>
        <ul>
          <li>
            <Link to="mytask-01">Task 1 - Introduce</Link>
          </li>
          <li>
            <Link to="mytask-02">Task 2 - Interfaces</Link>
          </li>
          <li>
            <Link to="mytask-03">Task 3 - New level</Link>
          </li>
        </ul>
      </div>

      <div className="tasks-load-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Home;