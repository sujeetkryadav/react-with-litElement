import React from 'react';
import './App.css';
import Home from './home-component/HomeComponent';
import './script/autocomplete';
import './script/dropdown-search-component';
import './script/input-tags-component'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
         <Home></Home>
      </header>
    </div>
  );
}

export default App;
