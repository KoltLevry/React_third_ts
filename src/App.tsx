import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import MyTask_01 from "./components/pages/Home/MyTask_01/MyTask_01";
import MyTask_02 from "./components/pages/Home/MyTask_02/MyTask_02";
import MyTask_03 from "./components/pages/Home/MyTask_03/MyTask_03";

import Lessons from "./components/pages/lessons/Lessons";
import Lesson_01 from "./components/pages/lessons/Lesson_01/Lesson_01";
import Lesson_04 from "./components/pages/lessons/Lesson_04/Lesson_04";

import Homeworks from "./components/pages/homeworks/Homeworks";

import Homework_01 from "./components/pages/homeworks/Homework_01/Homework_01";
import Homework_02 from './components/pages/homeworks/Homework_02/Homework_02';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="mytask-01" element={<MyTask_01 />} />
            <Route path="mytask-02" element={<MyTask_02 />} />
            <Route path="mytask-03" element={<MyTask_03 />} />
          </Route>
          <Route path="/lessons" element={<Lessons />}>
            <Route path="lesson-01" element={<Lesson_01 />} />
            <Route path="lesson-04" element={<Lesson_04 />} />
          </Route>
          <Route path="/homeworks" element={<Homeworks />}>
            <Route path="homework-01" element={<Homework_01 />} />
            <Route path="homework-02" element={<Homework_02 />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
