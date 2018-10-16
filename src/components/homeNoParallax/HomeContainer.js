import React, {Component} from 'react';
import './styles.css';
//import {Header} from "./Header";
import firebase, {facebookLogin, googleLogin, redirectedUser, saveEmail, writeEmail} from "../../services/firebase";
import swal from "sweetalert";
import {Title} from "./Title";
import {WhyThisCourse} from "./WhyThisCourse";
import {DescriptionCourse} from "./DescriptionCourse";
import {Instructor} from "./Instructor";
import {AboutIronhack} from "./AboutIronhack";
import {Footer} from "./Footer";
//import {LoginModal} from "../home/Modal";
import { Button } from 'antd';

class HomeContainer extends Component{

  state = {
    visible: true,
    loading:true,
    email:null,
    error:false
  };

  componentWillMount(){
    firebase.auth().getRedirectResult().then((result)=>{
      if(!result.user) return this.setState({loading:false});
      // The signed-in user info.
      redirectedUser(result)
        .then(() => {
          this.setState({loading:false});
          this.props.history.push('/profile')
        }).catch(e=>swal("Algo falló", "Intentalo más tarde", "error"))
    })
  }

  handleCancel = () => {
    this.setState({visible:false});
  };

  handleSubmit = () => {
    const {email} =  this.state;
    if(!email || !email.includes('@') || email.includes(' ')){
      this.setState({error:true})
    } else {
      this.setState({error:false});
      saveEmail(email)
        .then(()=>{
          this.setState({visible:false});
          swal("¡Gracias!", "Nos pondremos en contacto contigo cuando lancemos el curso.", "success");
          writeEmail(email)
        })
        .catch(e=>{
          this.setState({visible:false});
          swal("!Algo pasó¡", "No pudimos guardar tu correo, intenta más tarde.", "error");
        })
    }
  };

  onEmailChange = (e) => {
    this.setState({email:e.target.value})
  };

  handleShow = () => {
    this.setState({visible:true})
  };

  loginWithFacebook = () => {
    facebookLogin()
    // .then(()=>{
    //   this.props.history.push('/profile')
    // })
    // .catch(e=>console.log(e))
  };

  loginWithGoogle = () => {
    googleLogin()
    // .then(()=>{
    //   this.props.history.push('/profile')
    // })
    // .catch(e=>console.log(e))
  };

  render() {
    const {visible, loading, error} = this.state;
    return (
      <div className='containerPage'>
        {/* <Header handleShow={this.handleShow} loading={loading}/> */}
        <Title 
        error={error}
        visible={visible}
        handleSubmit={this.handleSubmit} 
        onChange={this.onEmailChange}
        email={this.state.email}
        loading={loading}/>
        <WhyThisCourse/>
        <DescriptionCourse/>
        <Instructor/>
        <AboutIronhack/>
        <Footer/>
        {/* <LoginModal onEmailChange={this.onEmailChange}
                    email={this.state.email}
                    error={this.state.error}
                    visible={visible}
                    handleSubmit={this.handleSubmit}
                    handleCancel={this.handleCancel}
                    facebookLogin={this.loginWithFacebook}
                    googleLogin={this.loginWithGoogle}
        /> */}
        <button style={{display:"none"}} onClick={this.loginWithGoogle} >Login</button>
      </div>
    )
  }
}

export default HomeContainer;
