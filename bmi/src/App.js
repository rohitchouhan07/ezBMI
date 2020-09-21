import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Result from './components/Result'

function App() {
  return (
    <div className="App">
      <div className="container-fluid nav-_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <Navbar />
      <br></br>
      <Calculator />
      
          </div>
        </div>
      </div>
      

    </div>
  );
}

export default App;
