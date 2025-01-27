import { Outlet, Link } from "react-router-dom";
import "./Lessons.css";

function Lessons() {
  return (
    <div className="lessons-wrapper">
      <div className="lessons-numbers-container">
      <div className="lessonpage-title">Welcome to the Lessons Page!</div>
        <ul>
          <li>
            <Link to="lesson-01">Lesson 1</Link>
          </li>
          <li>
            <Link to="lesson-04">Lesson 4 = 8</Link>
          </li>
          <li>
            <Link to="lesson-05">Lesson 5 = 9</Link>
          </li>
          <li>
            <Link to="lesson-06">Lesson 6 = 10</Link>
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
