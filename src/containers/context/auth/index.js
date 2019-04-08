import React, { Component } from 'react'

export const AuthContext = React.createContext();

export class AuthProvider extends Component {
  state = {
    sessionId: ''
  }

  setSession = (uid) => {
    this.setState({
      sessionId: uid,
    })
  }

  render() {
    return (
      <AuthContext.Provider value={{
        state: this.state,
        setSession: this.setSession,
      }}
      >
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}
