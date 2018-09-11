import React, {Component} from 'react'
import LoginDisplay from './LoginDisplay';
import {facebookLogin} from '../../services/firebase'

class LoginForm extends Component{

  loginWithFacebook = () => {
    facebookLogin()
    .then(user=>{
      this.props.history.push('/profile')
    })
    .catch(e=>console.log(e))
  }

  render(){
    return(
      <LoginDisplay onClick={this.loginWithFacebook} />
    )
  }
}

export default LoginForm