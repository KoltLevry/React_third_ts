import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import MyTask_01 from "./components/pages/Home/MyTask_01/MyTask_01";
import MyTask_02 from "./components/pages/Home/MyTask_02/MyTask_02";
import MyTask_03 from "./components/pages/Home/MyTask_03/MyTask_03";
import MyTask_04 from './components/pages/Home/MyTask_04/MyTask_04';
import MyTask_05 from './components/pages/Home/MyTask_05/MyTask_05';
import MyTask_06 from './components/pages/Home/MyTask_06/MyTask_06';

import Lessons from "./components/pages/lessons/Lessons"
import Lesson_08 from "./components/pages/lessons/Lesson_08/Lesson_08";
import Lesson_09 from './components/pages/lessons/Lesson_09/Lesson_09';
import Lesson_10 from './components/pages/lessons/Lesson_10/Lesson_10';

import Homeworks from "./components/pages/homeworks/Homeworks"
import Homework_08 from "./components/pages/homeworks/Homework_08/Homework_08";
import Homework_09 from './components/pages/homeworks/Homework_09/Homework_09';
import Homework_10 from './components/pages/homeworks/Homework_10/Homework_10';
import Homework_11 from './components/pages/homeworks/Homework_11/Homework_11';

function App() {
  return (
    <>
    
      <Router>
          <GlobalStyles />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="mytask-01" element={<MyTask_01 />} />
              <Route path="mytask-02" element={<MyTask_02 />} />
              <Route path="mytask-03" element={<MyTask_03 />} />
              <Route path="mytask-04" element={<MyTask_04 />} />
              <Route path="mytask-05" element={<MyTask_05 />} />
              <Route path="mytask-06" element={<MyTask_06 />} />
            </Route>
            <Route path="/lessons" element={<Lessons />}>
              <Route path="lesson-08" element={<Lesson_08 />} />
              <Route path="lesson-09" element={<Lesson_09 />} />
              <Route path="lesson-10" element={<Lesson_10 />} />
            </Route>
            <Route path="/homeworks" element={<Homeworks />}>
              <Route path="homework-08" element={<Homework_08 />} />
              <Route path="homework-09" element={<Homework_09 />} />
              <Route path="homework-10" element={<Homework_10 />} />
              <Route path="homework-11" element={<Homework_11 />} />
            </Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;