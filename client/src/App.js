import { Route, Routes} from 'react-router-dom'
import Home from './Components/home';
import LoginButton from './Components/login';
import LogoutButton from './Components/logout';
import Profile from './Components/profile';
import { Connections } from './Components/connections';
import EditProfileForm from "./Components/EditProfileForm";
import { BrowserRouter } from 'react-router-dom'
import { Requests } from './Components/requests';
import { Messages } from './Components/messages';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<LoginButton />} /> */}
          <Route path="/logout" element={<LogoutButton />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<EditProfileForm />} />
          <Route path="/connections" element={<Connections />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/messages" element={<Messages />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
