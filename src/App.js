import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import ItemListContainer2 from './components/ItemListContainer/ItemListContainer2';
import ItemDetailContainer2 from './components/ItemDetailContainer/ItemDetailContainer2';

import './style.css';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer2 />} />
        <Route exact path="/category/:id" element={<ItemListContainer2 />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer2 />} />
      </Routes>
    </BrowserRouter>
  );
}
