import LoginButton from "./Components/login";
import LogoutButton from "./Components/logout";
import Profile from "./Components/profile";
import EditProfileForm from "./Components/EditProfileForm";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
      <Profile />
      <EditProfileForm />
    </div>
  );
}

export default App;
