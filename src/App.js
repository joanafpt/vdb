import React from 'react';
import './App.css';
//import Dropdown from './components/Dropdown';
import Routes from './routes/Route'

function App() {

  return (
    <div className="App">  
      <div className="container">
        <div className="row">
          <div className="col-sm">
              <Routes/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
