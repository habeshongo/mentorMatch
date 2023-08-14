import React, { useState } from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormControl,
  Typography,
  Container,
  Box,
  Button,
} from '@mui/material';

function MentorProfile() {
  // State variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mentorDescription, setMentorDescription] = useState('');
  const [menteeChecked, setMenteeChecked] = useState(false);
  const [mentorChecked, setMentorChecked] = useState(false);
  const [interest, setInterest] = useState('');
  const [interestDescription, setInterestDescription] = useState('');
  const [expertiseInterest, setExpertiseInterest] = useState('');
  const [yearsOfExperience, setYearsOfExperience] = useState('');
  const [expertiseDescription, setExpertiseDescription] = useState('');

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to submit the form data to the server/database
  };

  return (
    <Container>
      <Box sx={{ width: '750px', margin: 'auto', height: '100vh', py: '50px' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" sx={{ my: '16px' }}>
            Edit Profile
          </Typography>
          <Typography sx={{ mb: '16px' }}>Personal Information</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <TextField
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <TextField
              label="Mentor Profile Description"
              multiline
              value={mentorDescription}
              onChange={(e) => setMentorDescription(e.target.value)}
            />

            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={menteeChecked}
                      onChange={(e) => setMenteeChecked(e.target.checked)}
                    />
                  }
                  label="Do you want to be a mentee?"
                />
              </FormGroup>
            </FormControl>

            {/* Additional fields based on menteeChecked */}
            {menteeChecked && (
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography sx={{ mb: '16px' }}>Interests</Typography>
                <TextField
                  label="Interest"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                />
                <TextField
                  label="Interest Description"
                  multiline
                  value={interestDescription}
                  onChange={(e) => setInterestDescription(e.target.value)}
                />
              </Box>
            )}

            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={mentorChecked}
                      onChange={(e) => setMentorChecked(e.target.checked)}
                    />
                  }
                  label="Do you want to be a mentor?"
                />
              </FormGroup>
            </FormControl>

            {/* Additional fields based on mentorChecked */}
            {mentorChecked && (
              <Box display="flex" flexDirection="column" gap={1}>
                <Typography sx={{ mb: '16px' }}>Experties</Typography>
                <TextField
                  label="Expertise Interest"
                  value={expertiseInterest}
                  onChange={(e) => setExpertiseInterest(e.target.value)}
                />
                <TextField
                  label="Years of Experience"
                  value={yearsOfExperience}
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                />
                <TextField
                  label="Expertise Description"
                  multiline
                  value={expertiseDescription}
                  onChange={(e) => setExpertiseDescription(e.target.value)}
                />
              </Box>
            )}

            <Button
              type="submit"
              variant="contained"
              color="warning"
              sx={{
                p: '10px',
                fontSize: '18px',
                maxWidth: '250px',
                mt: '20px',
              }}
            >
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default MentorProfile;