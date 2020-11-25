import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Dashboard } from "./components/Dashboard";
import { views } from "./config/views";

function App() {
  return (
    <>
      <Navbar views={views} />
      <Dashboard />
    </>
  );
}

export default App;
