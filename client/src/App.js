import logo from './logo.svg';
import './App.css';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import Profile from './Components/profile';

function App() {
  return (
    <div className="App">
      <LoginButton />
        <LogoutButton />
        <Profile />
    </div>
  );
}

export default App;
