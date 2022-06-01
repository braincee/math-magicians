import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './route-pages/Home';
import Quotes from './route-pages/Quotes';
import NotMatch from './route-pages/NotMatch';
import Navbar from './route-pages/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" exact="true" />
        <Route element={<Calculator />} path="/calculator" exact="true" />
        <Route element={<Quotes />} path="/quotes" exact />
        <Route element={<NotMatch />} path="*" exact />
      </Routes>
    </>
  );
}

export default App;
