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
  BroadcastPage,
  EventInfo
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
        <PrivateRoute path="/event-info">
          <EventInfo />
        </PrivateRoute>
        <PrivateRoute path="/agenda">
          <AgendaPage />
        </PrivateRoute>
        <PrivateRoute path="/speaker">
          <SpeakerPage />
        </PrivateRoute>
        <PrivateRoute path="/sponsor">
          <SponsorPage />
        </PrivateRoute>
        <PrivateRoute path="/broadcast">
          <BroadcastPage />
        </PrivateRoute>
        <Route path="/join" component={AuthPage} />
      </Switch>
    </Router>
  )
}
