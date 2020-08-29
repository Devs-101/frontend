import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
  AuthPage,
  HomePage,
  SponsorPage,
  SpeakerPage,
  AgendaPage,
  BroadcastPage
} from './pages'

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/join" component={AuthPage} />
        <Route path="/agenda" component={AgendaPage} />
        <Route path="/speaker" component={SpeakerPage} />
        <Route path="/sponsor" component={SponsorPage} />
        <Route path="/broadcast" component={BroadcastPage} />
      </Switch>
    </Router>
  )
}
