import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthPage, HomePage, AgendaPage } from './pages'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/join" component={AuthPage} />
        <Route path="/agenda" component={AgendaPage} />
      </Switch>
    </Router>
  )
}
