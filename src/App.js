import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './setup/theme';
import Home from './scenes/home/home';
import Birth_reminder from './scenes/pages/01-birthday-reminder/birth_reminder';

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth='xl'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Birth_reminder' element={<Birth_reminder />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
