import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TreePage from './pages/TreePage';
import AboutPage from './pages/AboutPage';

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<TreePage />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);

export default Router;