import React, {useState} from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display='flex' flexDirection={"column"} maxWidth={400} justifyItems="center" alignItems={'center'} margin="auto" borderRadius={6} marginTop={6} padding={3} boxShadow={"5px 5px 10px #ccc"} >
        <Typography variant='h2' padding={3} textAlign="center">{isSignup ? 'Signup': 'Login'}</Typography>
        {isSignup && <TextField onChange={handleChange} value={input.name} margin='normal' name="name" type="text" variant='outlined' placeholder='Name' padding={3} sx={{":hover": {
          boxShadow:"5px 5px 10px #ccc"
        }}}/>}
        <TextField onChange={handleChange} value={input.email} margin='normal' name="email" type="email" variant='outlined' placeholder='Email' padding={3} sx={{":hover": {
          boxShadow:"5px 5px 10px #ccc"
        }}}/>
        <TextField onChange={handleChange} value={input.password} margin='normal' name="password" type="password" variant='outlined' placeholder='Password' padding={3} sx={{":hover": {
          boxShadow:"5px 5px 10px #ccc"
        }}}/> 
       <Button type='submit' sx={{ marginTop: 4 }} variant="contained" color="warning">
       
{isSignup ?"Signup": "Login"}
</Button>
<Button onClick ={()=>setIsSignup(!isSignup)} sx={{ marginTop: 4 }}>Change to {isSignup ? 'Login' : 'Signup'}</Button>
       
        </Box>
      </form>
    </div>
  )
}

export default Home