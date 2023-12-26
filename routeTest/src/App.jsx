// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Employees from './components/Employees';
import Layout from './components/Layout';
import Login from './components/Login';

function App() {
  return (
    <Router>
    
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<Layout  children ={<Home/>}/>}
        >
        </Route>
        <Route
          path="/projects"
          element={<Layout  children ={<Projects/>}/>}
        >
        </Route>
        <Route
          path="/employees"
          element={<Layout  children ={<Employees/>}/>}
        >
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
