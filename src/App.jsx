import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  AuthPage,
  HomePage,
  SponsorPage,
  SpeakerPage,
  AgendaPage,
  BroadcastPage,
  EventInfoPage,
  ErrorPage,
  AccountPage
} from './pages'
import { verifyUserAsync } from './redux/slices/users'
import { getAllEventsAsync } from './redux/slices/events'

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
  const { organizationId } = useSelector(state => {
    return {
      organizationId: state.users.organizationInfo.id
    }
  })

  React.useEffect(() => {
    dispatch(verifyUserAsync())
  }, [])

  React.useEffect(() => {
    dispatch(getAllEventsAsync(organizationId))
  }, [organizationId])

  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/">
          <HomePage />
        </PrivateRoute>
        <PrivateRoute path="/:eventId/event-info">
          <EventInfoPage />
        </PrivateRoute>
        <PrivateRoute path="/:eventId/agenda">
          <AgendaPage />
        </PrivateRoute>
        <PrivateRoute path="/:eventId/speaker">
          <SpeakerPage />
        </PrivateRoute>
        <PrivateRoute path="/:eventId/sponsor">
          <SponsorPage />
        </PrivateRoute>
        <PrivateRoute path="/:eventId/broadcast">
          <BroadcastPage />
        </PrivateRoute>
        <PrivateRoute path="/account">
          <AccountPage />
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
