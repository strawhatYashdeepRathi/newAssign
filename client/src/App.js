import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Prods';
import Desc from './components/Staticpage';



function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Body />} />
          <Route path='/:_id' element={<Desc />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;