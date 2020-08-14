import React from 'react';
import './App.css';
import Feed from './components/Feed/Feed'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import { Container, CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import Drawer from './components/Drawer';
import { deepPurple, grey, lightBlue } from '@material-ui/core/colors';
import { Helmet } from 'react-helmet';
import BottomNavigation from './components/BottomNavigation';
import StickyLoadingBar from './components/StickyLoadingBar';
import NotFound from './components/NotFound';
import InitialLoadingScreen from './components/InitialLoadingScreen';

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
  const [loading, setLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [initialLoading, setInitialLoading] = React.useState(true);

  const updateWindowDimensions = () => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else if (window.innerWidth > 768) {
      setMobile(false);
    }
  }

  React.useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    }
    window.addEventListener('resize', updateWindowDimensions);

    return function cleanup() {
      window.removeEventListener('resize', updateWindowDimensions);
    }
  }, []);

  let Nav;
  if (mobile) {
    Nav = <BottomNavigation />
  } else {
    Nav = <Drawer />
  }

  let LoadingBar;
  if (loading) {
    LoadingBar = <StickyLoadingBar />
  } else {
    LoadingBar = null;
  }

  return (
    <Router>
      <Helmet>
        <style>{`body { background-color: ${grey[100]}; }`}</style>
      </Helmet>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <InitialLoadingScreen on={initialLoading} setInitialLoading={setInitialLoading} />
        { !initialLoading
          ? (
            <>
              {Nav}
              {LoadingBar}
            </>
          ) : null }
        <Container maxWidth='lg'>
          <Header 
            title='Zhi Shi Dian' 
            mobile={mobile}
          />
          <main>
            <Switch>
              <Redirect from='/' to='/feed' exact />
              <Route 
                path='/feed' 
                render={() => (
                  loggedIn
                    ? <Feed 
                        setLoading={setLoading} 
                        initialLoading={initialLoading} 
                        setInitialLoading={setInitialLoading} 
                      />
                    : <Redirect to='/login' />
                )} 
              />
              <Route 
                render={() => (
                  <NotFound setInitialLoading={setInitialLoading} />
                )}
              />
            </Switch>
          </main>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;