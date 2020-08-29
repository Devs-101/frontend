import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {
  AuthPage,
  HomePage,
  SponsorPage,
  SpeakerPage,
  AgendaPage,
  BroadcastPage
} from './pages'

function PrivateRoute({ children, ...rest }) {
  const jwt = window.sessionStorage.getItem('jwt')
  const isAuthenticated = jwt

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/join',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <HomePage />
        </PrivateRoute>
        <Route path="/join" component={AuthPage} />
        <Route path="/agenda" component={AgendaPage} />
        <Route path="/speaker" component={SpeakerPage} />
        <Route path="/sponsor" component={SponsorPage} />
        <Route path="/broadcast" component={BroadcastPage} />
      </Switch>
    </Router>
  )
}
