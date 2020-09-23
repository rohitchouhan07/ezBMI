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
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <Navbar />
      <br></br>
      <Calculator />
      <br></br>
      <h1><span class="badge badge-dark">Compare</span></h1>
      <Table />
      <br></br>
      <h1><span class="badge badge-dark">Contact</span></h1>
      <Contact />
      <br></br>
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default App;
