import React, { Component } from 'react'
//import PropsTypes from 'prop-types'
import { LoginPage } from './styled'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FaUserLock } from 'react-icons/fa'
import { AuthConsumer } from './../context/auth'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
    }
    this.handleFormSubmition = this.handleFormSubmition.bind(this)
  }

  handleFormSubmition( event, authentication ) {
    event.preventDefault();
    
    authentication({
      username: this.state.username,
      password: this.state.password,
    })

    this.props.history.push('/');
  }
  
  render() {
    return (
      <AuthConsumer>
        {({ authentication }) => (
            <LoginPage>
              <form onSubmit={event => this.handleFormSubmition( event , authentication )}>
                <h3><FaUserLock /> Login</h3>
                <TextField 
                  id="username"
                  label="Username"
                  value={this.state.username}
                  onChange={ e => this.setState({ username: e.target.value })}
                />
                <TextField 
                  id="password"
                  label="Password"
                  type="password"
                  value={this.state.password}
                  onChange={ e => this.setState({ password: e.target.value })}
                />
                <Button 
                  variant="contained"
                  value="Login"
                  color="primary"
                  type="submit"
                >Login</Button>
              </form>
            </LoginPage>
          
        )}
      </AuthConsumer>
    )
  }
}

export default Login;