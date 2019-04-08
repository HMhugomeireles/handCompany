import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import App from './containers/app/View'
import Login from './containers/login'
import { GlobalStyle } from './styles'

export const Routes = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);