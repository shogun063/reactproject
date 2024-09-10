import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
