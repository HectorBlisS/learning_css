import React, {Component} from 'react'
import LoginDisplay from './LoginDisplay';
import {facebookLogin, googleLogin} from '../../services/firebase'

class LoginForm extends Component{

  loginWithFacebook = () => {
    facebookLogin()
    .then(()=>{
      this.props.history.push('/profile')
    })
    .catch(e=>console.log(e))
  }

  loginWithGoogle = () => {
    googleLogin()
    .then(()=>{
      this.props.history.push('/profile')
    })
    .catch(e=>console.log(e))
  }

  render(){
    return(
      <LoginDisplay 
      googleLogin={this.loginWithGoogle}
      facebookLogin={this.loginWithFacebook}
       />
    )
  }
}

export default LoginForm