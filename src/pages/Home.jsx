import React from 'react';
import { Container, Typography } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        欢迎来到 Heather Klar 网站
      </Typography>
      <Typography variant="body1">
        这是一个示例网站，您可以根据需要添加更多内容。
      </Typography>
    </Container>
  );
}

export default Home;
