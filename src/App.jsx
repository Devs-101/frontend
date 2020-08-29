import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthPage, HomePage, SponsorPage, SpeakerPage } from './pages'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/join" component={AuthPage} />
        <Route path="/speaker" component={SpeakerPage} />
        <Route path="/sponsor" component={SponsorPage} />
      </Switch>
    </Router>
  )
}
