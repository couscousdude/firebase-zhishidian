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
import Profile from './components/Profile/Profile';

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

  const mobileThresh = 600;

  const updateWindowDimensions = () => {
    if (window.innerWidth <= mobileThresh) {
      setMobile(true);
    } else if (window.innerWidth > mobileThresh) {
      setMobile(false);
    }
  }

  React.useEffect(() => {
    if (window.innerWidth <= mobileThresh) {
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
        <div style={{display: 'flex', height: 'calc(100vh-60px)'}}>
          <InitialLoadingScreen on={initialLoading} setInitialLoading={setInitialLoading} />
          { !initialLoading
            ? (
              <>
                {!mobile ? (
                  <Drawer />
                  ) : null}
                {loading ? <StickyLoadingBar /> : null}
              </>
            ) : null }
          <Container maxWidth='lg'>
            <Header 
              title='Zhi Shi Dian' 
              mobile={mobile}
            />
            <main style={{flexGrow: 1}}>
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
                  path='/users' 
                  render={() => (
                    loggedIn
                      ? <Profile 
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
        </div>
        <nav style={{height: '60px'}}>
        { !initialLoading
            ? (
              mobile ? (
                <BottomNavigation />
                ) : null
            ) : null }
        </nav>
      </ThemeProvider>
    </Router>
  );
}

export default App;