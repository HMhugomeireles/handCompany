import React from 'react'
import { AuthConsumer } from './../../containers/context/auth'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest}) => (
  <AuthConsumer>
  {({ state }) => console.log(state) ||
      <Route {...rest} render={ (props) => state.isAuthenticated ?
        <Component {...props}/>
        :
        <Redirect to="/login" />
      } />
  }
  </AuthConsumer>
);

export default PrivateRoute;