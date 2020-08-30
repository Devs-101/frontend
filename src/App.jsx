import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  AuthPage,
  HomePage,
  SponsorPage,
  SpeakerPage,
  AgendaPage,
  BroadcastPage,
  EventInfoPage,
  ErrorPage
} from './pages'
import { verifyUserAsync } from './redux/slices/users'

function PrivateRoute({ children, ...rest }) {
  const jwt = window.sessionStorage.getItem('jwt')
  const isAuthenticated = !!jwt && jwt !== 'undefined'

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

function AuthRoute({ children, ...rest }) {
  const jwt = window.sessionStorage.getItem('jwt')
  const isAuthenticated = !!jwt && jwt !== 'undefined'

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticated ? children : <Redirect to="/" />
      }
    />
  )
}

export function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(verifyUserAsync())
  }, [])

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/event-info">
          <EventInfoPage />
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
        <AuthRoute path="/join">
          <AuthPage />
        </AuthRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </Router>
  )
}
