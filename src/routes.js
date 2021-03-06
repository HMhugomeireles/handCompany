import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './containers/app/View'
import Login from './containers/login'
import PrivateRoute from './components/privateroute'
import { GlobalStyle } from './styles'
import AuthProvider from './containers/context/auth'



export const Routes = () => (
  <AuthProvider>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/app" component={App}/>
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);
