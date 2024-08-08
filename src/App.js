import React from 'react';
import './App.css';
import Table from './Table';
import logo from './assets/logo512.png'; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <div className="top-nav">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1>Company Dashboard</h1>
      </div>
      <div className="main-container">
        <div className="nav">
          <h2>Navigation</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="content">
          <h2>Employee Directory</h2>
          <Table />
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2024 made with love by Muskan Jaiswal</p>
      </footer>
    </div>
  );
}

export default App;
