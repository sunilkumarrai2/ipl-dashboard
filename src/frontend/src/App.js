import logo from './logo.svg';
import './App.css';
import { TeamPage } from './pages/TeamPage';

function App() {
  return (
    <div className="App">
        <TeamPage />
    </div>
  );
}

export default App;


// BELOW IS THE ORIGINAL CODE WE GOT
/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

export default App;
*/
