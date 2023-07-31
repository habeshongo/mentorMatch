import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import Profile from './Components/profile';

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
        <LoginButton />
        <LogoutButton />
        <Profile />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
