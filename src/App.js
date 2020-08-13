import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { Container, CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import Drawer from './components/Drawer';
import { deepPurple, grey, lightBlue } from '@material-ui/core/colors';
import { Helmet } from 'react-helmet';
import BottomNavigation from './components/BottomNavigation';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[`A400`],
      background: grey[100]
    },
    secondary: {
      main: lightBlue[`A700`]
    },
  },
});

function App() {
  const [mobile, setMobile] = React.useState(false);

  const updateWindowDimensions = () => {
    if (window.innerWidth <= 600) {
      setMobile(true);
    } else if (window.innerWidth > 600) {
      setMobile(false);
    }
  } 

  React.useEffect(() => {
    if (window.innerWidth <= 600) {
      setMobile(true);
    }
    window.addEventListener('resize', updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, []);

  return (
    <Router>
      <Helmet>
        <style>{`body { background-color: ${grey[100]}; }`}</style>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        { mobile
            ? <BottomNavigation />
            : <Drawer />
        }
        <Container maxWidth='lg'>
          <Header title='Zhi Shi Dian' mobile={mobile} />
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
