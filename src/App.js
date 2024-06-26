import React from 'react'
import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import ToDo from './views/ToDo';
import About from './views/About';
import CalendarComp from './views/Calendar';
import './calendar.css'; 

function App() {
    return (
      <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/todo" element={<ToDo />}></Route>
            <Route exact path="/calendar" element={<CalendarComp />}></Route>
            <Route exact path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </div>
        </Router>
  );
}

export default App