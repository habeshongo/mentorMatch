import React from 'react'
import LoginButton from './login';
import { SignupButton } from './signup';

const Home = () => {
  return (
    <div>
      MentorMatch
      <b>
        <LoginButton />
        <SignupButton />
      </b>
    </div>
  )
}

export default Home