import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { AuthPage, HomePage } from './pages'

function PrivateRoute({ component, ...rest }) {
  const isAuthenticated = window.sessionStorage.getItem('jwt') !== null

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          component
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
        <PrivateRoute exact path="/" component={HomePage} />
        <Route path="/join" component={AuthPage} />
      </Switch>
    </Router>
  )
}
