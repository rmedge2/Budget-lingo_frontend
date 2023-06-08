import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header>
        <h1>"Company name and logo"</h1>
      </header>
      <div>
        <h2> Nav Bar (on the side)</h2>
        Some HUGE smiling image
      </div>
      <div>
        Upon scroll
      </div>
      <div>
        <br/>
        will have some side by side rows
      </div>
    </div>
  );
}

export default App;
