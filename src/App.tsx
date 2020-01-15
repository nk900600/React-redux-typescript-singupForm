import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Signup from "./components/signup/signup";
import Signup_part2 from "./components/signup/signup_part2";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Signup_part2 />
      </header>
    </div>
  );
}

export default App;
