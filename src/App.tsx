import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Prop } from './classes/Prop';


const App: React.FC<Prop> = (prop:Prop) => {
  
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nice Boobs Bitch! {prop.testString}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}



// 
export default App;
