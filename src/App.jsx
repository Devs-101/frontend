import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthPage } from './pages'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/join" component={AuthPage} />
      </Switch>
    </Router>
  )
}
