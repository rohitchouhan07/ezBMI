import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Result from './components/Result';
import Table from './components/Table';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="container-fluid nav-_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <Navbar />
      <br></br>
      <Calculator />
      <h3>A tabular comparison</h3>
      <Table />
      <h3>Contact Us for diet couselling</h3>
      <Contact />
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default App;
