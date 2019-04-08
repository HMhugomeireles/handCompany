import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { LoginPage } from './styled'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FaUserLock } from 'react-icons/fa'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      sessionID: '',
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value })
  }

  render() {
    return (
      <LoginPage>
        <form>
          <h3><FaUserLock /> Login</h3>
          <TextField 
            id="username"
            label="Username"
            value={this.state.username}
            onChange={this.handleChange('username')}
          />
          <TextField 
            id="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange('password')}
          />
          <Button 
            variant="contained"
            value="Login"
            onClick={() => {}}
          >Login</Button>
        </form>
      </LoginPage>
    )
  }
}

export default Login;