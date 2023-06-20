import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from "./Views/Index";
import AboutMe from "./Views/AboutMe";
import Navbar from "./Components/Widgets/Navbar";
import TableOfContent from "./Views/TableOfContent";

function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path='/' Component={Index} />
        <Route path='/table' Component={TableOfContent} />
        <Route path='/about' Component={AboutMe} />
      </Routes>
    </Router>
  );
}

export default App;
