import { Avatar, Button, Grid, Paper, TextField, Typography, Link } from '@mui/material';
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


const LogIn = () => {
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: '20px auto'
  };
  const avatarStyle = {
    backgroundColor: 'green'
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const btnstyle = {
    margin: '8px 0'
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>BM</Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField label='Username' placeholder='Enter Username' fullWidth required />
        <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required />

        <div>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Me" />
        </div>
        <Button variant='contained' type='submit' color='primary' style={btnstyle} fullWidth >Sign In</Button>
        <Typography>
          <Link href="#">
            Forgot Password
          </Link>
        </Typography>
        <Typography> Do you have an account?
          <Link href="#">
            Sign Up!
          </Link>
        </Typography>


      </Paper>
    </Grid>
  )
}

export default LogIn;

// delete this comment