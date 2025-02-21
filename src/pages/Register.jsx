import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement registration logic here
    // For example, check if passwords match, then store the new user credentials
    if (password === confirmPassword) {
      // Registration successful, redirect to login
      navigate('/login');
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" align="center" style={{ marginTop: '20px', marginBottom: '20px' }}>
        注册
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="用户名"
              variant="outlined"
              fullWidth
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="密码"
              variant="outlined"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="确认密码"
              variant="outlined"
              type="password"
              fullWidth
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              注册
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Register;
