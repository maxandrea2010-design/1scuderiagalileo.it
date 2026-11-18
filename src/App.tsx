import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Macchina } from './pages/Macchina';
import { Sponsor } from './pages/Sponsor';
import { Donazioni } from './pages/Donazioni';
import { Competizioni } from './pages/Competizioni';
import { Contatti } from './pages/Contatti';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/macchina" element={<Macchina />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/donazioni" element={<Donazioni />} />
          <Route path="/competizioni" element={<Competizioni />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
