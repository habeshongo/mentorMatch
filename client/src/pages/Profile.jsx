import { Container, Box, Typography, Button} from '@mui/material'
import { Avatar } from '@mui/material';
import React from 'react'
import avatar from '../assets/images/test-photo.jpg'
import { Link } from 'react-router-dom';

const Profile = () => {
 
  return (
    <Box sx={{bgcolor:'gray', height: '100vh', width: '100%'}}>
      <Container >

        <Box display='flex' justifyContent="space-between" alignItems="center" sx={{ p:"16px"}}>
          <Box display="flex" gap={4} sx={{  p: 4}}>
        
          <Avatar src={avatar} variant ='circular' alt="avatar"  sx={{width:"150px", height:"150px"}}/>
          <Typography variant='h3' alignSelf="end">Emily Lee</Typography>

          </Box>
          
       
        <Box>
          <Button color='secondary' variant='contained' alignSelf="end">Connect</Button>
        </Box>
        </Box>

        <Box display='flex' gap={4}>
          <Box display="flex" flexDirection='column' gap={4}>
            <Box sx={{bgcolor:'lightgray', borderRadius:'10px', p:'20px'}}>
              <Typography variant='h4' sx={{mb:"16px"}}>About Me</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquam necessitatibus laboriosam consequuntur ea cum aspernatur quisquam a similique quia?
              </Typography>
            </Box>
            <Box sx={{bgcolor:'lightgray', borderRadius:'10px', p:'20px'}}>
              <Box  >
                <Typography variant='h4'  sx={{mb:"16px"}}>Interests</Typography>
                <Typography sx={{mb:"12px"}}>Software Development</Typography>
                <Typography>I have a 1 million dollar idea on how to overtake Facebook.</Typography>
                <Box sx={{my:'16px'}}>
                <Typography sx={{mb:'12px'}}>Woodworking</Typography>
                <Typography>Looking to build the next big site.</Typography>
                </Box>
              </Box>
             
              <Link to="/edit-profile">
              <Button variant='outlined' sx={{my:"20px"}}>Edit
              </Button>
              </Link>
            
            
            </Box>
          </Box>
          <Box sx={{bgcolor:'lightgray', borderRadius:'10px', p:'20px'}}>
            <Typography variant='h4' sx={{mb:"16px"}}>Expertise</Typography>

            <Box display='flex' flexDirection='column' gap={4}>
            <Box>
              <Typography sx={{mb:"12px"}}>Gardening, 10 years experience</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum. Rem ullam laboriosam soluta quibusdam, voluptatibus m?</Typography>
            </Box>

            <Box>
              <Typography sx={{mb:"12px"}}>Gardening, 10 years experience</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum. Rem ullam laboriosam soluta quibusdam, voluptatibus molestiae dolores delectus enim?</Typography>
            </Box>

            <Box>
              <Typography sx={{mb:"12px"}}>Gardening, 10 years experience</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum. Rem ullam laboriosam soluta quibusdam, voluptatibus molestiae dolores delectus enim?</Typography>
            </Box>

            <Box>
              <Typography sx={{mb:"12px"}}>Gardening, 10 years experience</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum. Rem ullam laboriosam soluta quibusdam, voluptatibus molestiae dolores delectus enim?</Typography>
            </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Profile