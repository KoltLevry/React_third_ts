import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import MyTask_01 from "./components/pages/Home/MyTask_01/MyTask_01";

import Lessons from "./components/pages/lessons/Lessons";
import Lesson_01 from "./components/pages/lessons/Lesson_01/Lesson_01";
import Lesson_02 from "./components/pages/lessons/Lesson_02/Lesson_02";

import Homeworks from "./components/pages/homeworks/Homeworks";

import "./App.css";
import Homework_01 from "./components/pages/homeworks/Homework_01/Homework_01";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="mytask-01" element={<MyTask_01 />} />
            <Route path="mytask-02" element={<MyTask_01 />} />
          </Route>
          <Route path="/lessons" element={<Lessons />}>
            <Route path="lesson-01" element={<Lesson_01 />} />
            <Route path="lesson-02" element={<Lesson_02 />} />
          </Route>
          <Route path="/homeworks" element={<Homeworks />}>
            <Route path="homework-01" element={<Homework_01 />} />
            {/* <Route path="homework-02" element={<Lesson_02 />} /> */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
