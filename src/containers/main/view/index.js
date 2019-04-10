import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../../home/view'
import Clients from './../../clients/view'

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/app/" component={Home}/>
          <Route path="/app/clients" component={Clients}/>
        </Switch>
      </Fragment>
    )
  }
}
