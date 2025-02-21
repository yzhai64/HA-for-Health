import React from 'react';
import { Container, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        欢迎来到您的仪表盘
      </Typography>
      <Typography variant="body1">
        您可以在这里查看您的个人信息和进行相关操作。
      </Typography>
    </Container>
  );
}

export default Dashboard;
