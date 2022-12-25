import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './views/Home';
import ToDo from './views/ToDo';
import About from './views/About';
import Notes from './views/Notes';
import Calendar from './views/Calendar';

const DATA=[]

function App() {
    return (
      <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/todo" element={<ToDo tasks={DATA} />}></Route>
            <Route exact path="/notes" element={<Notes />}></Route>
            <Route exact path="/calendar" element={<Calendar />}></Route>
          </Routes>
        </div>
        </Router>
  );
}

export default App