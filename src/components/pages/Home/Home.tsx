import { Outlet, Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-numbers-container">
      <div>Welcome to the Home Page!</div>
        <ul>
          <li>
            <Link to="mytask-01">Task 1</Link>
          </li>
          <li>
            <Link to="mytask-02">Task 2</Link>
          </li>
          <li>
            <Link to="mytask-03">Task 3</Link>
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
