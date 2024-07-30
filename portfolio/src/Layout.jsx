import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';

export default function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* This is where nested routes will be rendered */}
      </main>
      <About />
    </div>
  );
}
