import { Container, Typography, CssBaseline } from '@mui/material';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom style={{ marginTop: '2rem', textAlign: 'center' }}>
          User Management System
        </Typography>
        <UserList />
      </Container>
    </>
  );
}

export default App; 