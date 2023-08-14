import React from "react";
import LoginButton from "./login";
import { SignupButton } from "./signup";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {
    user,
    isAuthenticated,
    isLoading: isAuthLoading,
    handleRedirectCallback,
  } = useAuth0();
  const navigate = useNavigate();

  return (
    <section>
      MentorMatch
      <div>
        {!isAuthenticated ? (
          <>
            <LoginButton />
            <SignupButton />
          </>
        ) : (
          <LogoutButton />
        )}
        <button onClick={() => handleRedirectCallback()}>test button</button>
      </div>
    </section>
  );
};

export default Home;
