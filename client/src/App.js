import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import Profile from './Components/profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginButton />} />
        <Route path="/logout" element={<LogoutButton />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
