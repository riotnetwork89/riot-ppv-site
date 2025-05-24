
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stream from './pages/Stream';
import Upload from './pages/Upload';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stream" element={<Stream />} />
      <Route path="/upload" element={<Upload />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
