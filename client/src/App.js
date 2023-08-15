import { Route, Routes } from "react-router-dom";
import Home from "./Components/home";
import LoginButton from "./Components/login";
import LogoutButton from "./Components/logout";
import Profile from "./Components/profile";
import { Connections } from "./Components/connections";
import EditProfileForm from "./Components/EditProfileForm";
import { BrowserRouter } from "react-router-dom";
import { Requests } from "./Components/requests";
import { Messages } from "./Components/messages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Auth0ProviderWithNavigate } from "./auth0-provider-with-navigate";

import SendbirdProvider from "./Components/SendbirdProvider";
import SendbirdMessenger from "./Components/SendbirdMessenger";

import Connects from "./Components/Connects";
import OthersProfile from "./Components/OthersProfile";
import AshtonProfile from "./Components/AshtonProfile";

// Create a client
const queryClient = new QueryClient();

// Provide the client to your App
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Auth0ProviderWithNavigate>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logout" element={<LogoutButton />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:id" element={<OthersProfile />} />
              <Route path="/edit" element={<EditProfileForm />} />
              <Route path="/connections" element={<Connects />} />
              <Route path="/requests" element={<Requests />} />
              <Route path="/messages" element={<Messages />} />
              <Route
                path="/chat"
                element={
                  <SendbirdProvider>
                    <SendbirdMessenger />
                  </SendbirdProvider>
                }
              />
            </Routes>
          </Auth0ProviderWithNavigate>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
