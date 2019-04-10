import React, { Component } from 'react'
import { GenUid } from './../../../actions/GenUID'

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer

class AuthProvider extends Component {
  state = {
    sessionId: '',
    isAuthenticated: false,
    username: 'Anonymous'
  };

  componentWillMount() {
    this.setState({
      sessionId: GenUid(),
    })
  }

  authentication = ({username, password}) => {
    console.log(username, password)
    if (username !== undefined && password !== undefined ) {
      // make request token and send the UID
      this.setState({
        isAuthenticated: true,
        username: username,
      })
    }
  }

  logOut = ({ sessionId }) => {
    // get the token from localstorage
    // send request to remove the session 
    this.setState({
      isAuthenticated: false,
    })
  }

  render() {
    return (
      <AuthContext.Provider value={{
        state: this.state,
        authentication: this.authentication,
        logOut: this.logOut,
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider;