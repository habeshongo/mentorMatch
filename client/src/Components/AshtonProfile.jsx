import { Container, Box, Typography, Button} from '@mui/material'
import { Avatar } from '@mui/material';
import React from 'react'
import avatar from '../assets/images/test-photo.jpg'
import { Link } from 'react-router-dom';

const Profile = ({picture, name, expertises, interests, description}) => {
 
  return (
    <Box sx={{bgcolor:'gray', height: '100vh', width: '100%'}}>
      <Container >

        <Box display='flex' justifyContent="space-between" alignItems="center" sx={{ p:"16px"}}>
          <Box display="flex" gap={4} sx={{  p: 4}}>
        
          <Avatar src={picture} variant ='circular' alt="avatar"  sx={{width:"150px", height:"150px"}}/>
          <Typography variant='h3' alignSelf="end">{name}</Typography>

          </Box>
          
       
       
        </Box>

        <Box display='flex' gap={4}>
          <Box display="flex" flexDirection='column' gap={4}>
            <Box sx={{bgcolor:'lightgray', borderRadius:'10px', p:'20px'}}>
              <Typography variant='h4' sx={{mb:"16px"}}>About Me</Typography>
              <Typography>
                {description}
              </Typography>
            </Box>
            <Box sx={{bgcolor:'lightgray', borderRadius:'10px', p:'20px'}}>
              <Box  >
                <Typography variant='h4'  sx={{mb:"16px"}}>Interests</Typography>
                {
                  interests.map((interest, index) => {
                    return (
                      <>
                      <Box key={index} >
                        <Typography sx={{mb:"12px"}}>{interest.name_of_subject}</Typography>
                        <Typography>{interest.subject_description}</Typography>
                      </Box>
                      <br/>
                      </>
                    )
                  })
                }
                </Box>
                {/* // <Typography sx={{mb:"12px"}}>Software Development</Typography>
                // <Typography>I have a 1 million dollar idea on how to overtake Facebook.</Typography>
                // <Box sx={{my:'16px'}}>
                // <Typography sx={{mb:'12px'}}>Woodworking</Typography>
                // <Typography>Looking to build the next big site.</Typography>
                // </Box> */}
                
             
            
            
            
            </Box>
          </Box>
          <Box sx={{bgcolor:'lightgray', borderRadius:'10px', p:'20px'}}>
            <Typography variant='h4' sx={{mb:"16px"}}>Expertise</Typography>

            <Box display='flex' flexDirection='column' gap={4}>
              {
                expertises.length > 0 && expertises.map((expertise, index) => {
                  return (
                    <Box key={index}>
                      <Typography sx={{mb:"12px"}}>{expertise.skillset}, {expertise.years_of_exp} years of experience</Typography>
                      <Typography>{expertise.exp_description}</Typography>
                    </Box>
                  )
                })
              }
            {/* <Box>
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
            </Box> */}
{/* 
            <Box>
              <Typography sx={{mb:"12px"}}>Gardening, 10 years experience</Typography>
              <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, cum. Rem ullam laboriosam soluta quibusdam, voluptatibus molestiae dolores delectus enim?</Typography>
            </Box> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Profile