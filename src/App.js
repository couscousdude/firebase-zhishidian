import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { Container, CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import Drawer from './components/Drawer';
import { deepPurple, grey } from '@material-ui/core/colors';
import { Helmet } from 'react-helmet';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: deepPurple[`A400`]
      }
    },
  });

  return (
    <Router>
      <Helmet>
        <style>{`body { background-color: ${grey[100]}; }`}</style>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Drawer />
        <Container maxWidth='lg'>
          <Header title='Zhi Shi Dian' />
          <main>
            <Switch>
              <Redirect from='/' to='/feed' exact />
              <Route path='/feed' component={Feed} />
            </Switch>
          </main>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
