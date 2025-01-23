import { Outlet, Link } from "react-router-dom";
import "./Lessons.css";

function Lessons() {
  return (
    <div className="lessons-wrapper">
      <div className="lessons-numbers-container">
      <div>Welcome to the Lessons Page!</div>
        <ul>
          <li>
            <Link to="lesson-01">Lesson 1</Link>
          </li>
          <li>
            <Link to="lesson-02">Lesson 2</Link>
          </li>
          <li>
            <Link to="lesson-03">Lesson 3</Link>
          </li>
        </ul>
      </div>

      <div className="tasks-load-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Lessons;
