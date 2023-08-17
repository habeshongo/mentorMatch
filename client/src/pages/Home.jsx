import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavBar from '../Components/Navbar';
import LoginButton from '../Components/login';
import { SignupButton } from '../Components/signup';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from '../Components/logout';

import { Button, TextField } from '@mui/material';
const Home = () => {
  const [isSignup, setIsSignup] = useState(false)
  const[input, setInput] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleChange = (e)=>{
setInput((prevState)=>({
  ...prevState,
  [e.target.name]: e.target.value,
}))
  }

  const handleSubmit = (e)=>{
e.preventDefault();
console.log(input)

setIsSignup(!isSignup);
setInput({
  name:"",
  email:"",
  password:"",
})
  }
  const {
    user,
    isAuthenticated,
    isLoading: isAuthLoading,
    handleRedirectCallback,
  } = useAuth0();
  return (
    <div style={{height:"100vh",backgroundColor:"#f5f5f5", display:"flex", justifyContent:"center", alignItems:"center", gap:"3em" }}>
      
      
        <Box paddingBottom={8}>
          <Typography variant="h3">
            <div style={{color:"#ff9c00", fontWeight:"700"}}>
            Mentor
            </div> 
            <div style={{fontWeight:"700"}}>Match</div>
              <p style={{fontSize:"18px", color:"#2C2C2C"}}>Connect with experts around<br/> the world on Mentor Match.</p>
          </Typography>
        </Box>
        <Box display="flex" flexDirection={"column"} gap={2}>
          <Box display='flex' flexDirection={"column"} minWidth={250} maxWidth={500} justifyItems="center" alignItems={'center'} margin="auto" borderRadius={2}  padding={2.5} boxShadow={"3px 3px 10px #9e9e9e"} backgroundColor={"#fafafa"}>
            {/* <Typography variant='h2' padding={3} textAlign="center">{!user ? 'LOGIN': 'LOGOUT'}</Typography> */}
          
                  <TextField onChange={handleChange} value={input.email} margin='normal' name="email" type="email" variant='outlined' placeholder='Email' padding={3} sx={{":hover": {
                  boxShadow:"5px 5px 10px #ccc"
                  }}}/>
                   <TextField onChange={handleChange} value={input.password} margin='normal' name="password" type="password" variant='outlined' placeholder='Password' padding={3} sx={{":hover": {
                   boxShadow:"5px 5px 10px #ccc"
                  }}}/>
          
            <div>
              {!user ? (
                <div style={{display:"flex", flexDirection:"column"}}>
                  <LoginButton />
                  <p style={{color:"#1774bd", margin:"0 auto", padding:"1em"}}>Forgot Password?</p>
                  <div style={{border: "1px solid lightgrey"}}></div>
                  <SignupButton />
                </div>
              ) : (
                <LogoutButton />
              )}
            </div>
          </Box>
          <div style={{margin:"0 auto", padding: "2px", fontSize:"16px", color: "#bdbdbd"}}>
            Mentorship made easy.
          </div>
        </Box>
      {/* </form> */}
    </div>
  )
}

export default Home