import logo from './logo.svg';
import './App.css';
import usemyToggle from 'use-my-tog';

function App() {
  const [isOn, setIsOn] = usemyToggle();
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
        <button onClick={() => setIsOn((isOn) => !isOn)}>
          isActive {`${isOn}`}
        </button>
      </header>
    </div>
  );
}

export default App;
