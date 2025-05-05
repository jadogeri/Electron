import reactLogo from './react.svg';
import electronLogo from './electron.svg';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={electronLogo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p> 
          Learn <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React 
          </a> + <a
            className="App-link"
            href="https://www.electronjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Electron
          </a>
        </p>
        
      </header>
    </div>
  );
}

export default App;
