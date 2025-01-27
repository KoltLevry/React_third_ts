import GlobalStyles from './styles/GlobalStyles';
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

import Homework_08 from "./components/pages/homeworks/Homework_08/Homework_08";
import Homework_09 from './components/pages/homeworks/Homework_09/Homework_09';

function App() {
  return (
    <>
    {/* фрагмент */}
      <Router>
          <GlobalStyles />
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
              <Route path="homework-08" element={<Homework_08 />} />
              <Route path="homework-09" element={<Homework_09 />} />
            </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
