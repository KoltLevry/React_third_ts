import { Outlet, Link } from "react-router-dom";
import "./Homeworks.css";

function Homework() {
  return (
    <div className="homework-wrapper">
      <div className="homework-numbers-container">
      <div>Welcome to the Homeworks Page!</div>
        <ul>
          <li>
            <Link to="homework-01">Homework 1</Link>
          </li>
          <li>
            <Link to="homework-02">Homework 2</Link>
          </li>
          <li>
            <Link to="homework-03">Homework 3</Link>
          </li>
        </ul>
      </div>

      <div className="tasks-load-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Homework;
