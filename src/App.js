import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>This is the children</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Click</button>
      </Greet>
      <Welcome name="Bruce" heroName="Batman">
        <button>Click</button>
      </Welcome>
      <Welcome />
    </div>
  );
}

export default App;
