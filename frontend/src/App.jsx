import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ChatComponent from './ChatComponent';
import PaginaInicial from './PaginaInicial';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PaginaInicial />} />
      <Route path="/chat" element={<ChatComponent />} />
    </Routes>
  );
}
