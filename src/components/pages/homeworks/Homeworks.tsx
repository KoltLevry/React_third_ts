import { Outlet, Link } from "react-router-dom";
import "./Homeworks.css";

function Homework() {
  return (
    <div className="homework-wrapper">
      <div className="homework-numbers-container">
      <div className="homeworkpage-title">Welcome to the Homeworks Page!</div>
        <ul>
          <li>
            <Link to="homework-08">Homework 8</Link>
          </li>
          <li>
            <Link to="homework-09">Homework 9</Link>
          </li>
          <li>
            <Link to="homework-10">Homework 10</Link>
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
