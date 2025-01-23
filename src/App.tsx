import './App.css'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Lesson_01 from './components/pages/lessons/Lesson_01/Lesson_01'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    // <Router>
      <div className='app'>
        {/* <h1>Hi ts</h1> */}
        {/* <Lesson_01 /> */}

        <Navbar />
        {/* <Routes>
          <Route path='/' element={<Home />} />
        </Routes> */}
      </div>
      
    // </Router>
  )
}

export default App
