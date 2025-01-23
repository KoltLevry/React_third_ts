import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Lessons from "./components/pages/lessons/Lessons";
import Lesson_01 from "./components/pages/lessons/Lesson_01/Lesson_01";
import Lesson_02 from "./components/pages/lessons/Lesson_02/Lesson_02";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />}>
            <Route path="lesson-01" element={<Lesson_01 />} />
            <Route path="lesson-02" element={<Lesson_02 />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
