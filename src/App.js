import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Home from './routes/Home/Home';
import Catalogo from './routes/Catalogo/Catalogo';
import Producto from './routes/Producto/Producto';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/category" element={<Catalogo />} />
        <Route exact path="/item/:id" element={<Producto />} />
      </Routes>
    </BrowserRouter>
  );
}
