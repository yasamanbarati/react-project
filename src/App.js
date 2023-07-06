import React, { Fragment } from 'react';
import { useInitialStateData } from './servises/shop/api';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './setup/theme';
import Home from './scenes/home/home'
import { BirthdayReminder } from './scenes/pages/birthday-reminder';
import { Tours } from './scenes/pages/tours';
import { useToursData } from './servises/shop/react-hook';
import Reviews from './scenes/pages/reviews/reviews';
import Menu from './scenes/pages/menu/menu';

function App() {

  useInitialStateData();
  useToursData();

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/BirthReminder' element={<BirthdayReminder />} />
          <Route path='/Tours' element={<Tours />} />
          <Route path='/Reviews' element={<Reviews />} />
          <Route path='/Menu' element={<Menu />} />
        </Routes>
      </ThemeProvider>
    </Fragment >
  );
}

export default App;
