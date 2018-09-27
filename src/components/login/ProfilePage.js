import React, {Component} from 'react'
import ProfileDisplay from './ProfileDisplay';
import Enrolled from './Enrolled'
import firebase, {updateUser} from '../../services/firebase'
import swal from 'sweetalert';

import {Button} from 'antd'



class ProfilePage extends Component{

    state = {
        imgData:null,
        logged:false,
        user:null,
        respaldo:null,
        loading:false,
        visible: false,
        errors:{}
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.goBack()
        this.setState({logged:true, user, respaldo:{...user}})
        this.checkUserStatus(user)
    }

    checkUserStatus = (usuario) => {
        firebase.firestore().collection('users').doc(usuario.uid).get()
        .then(doc=>{
            if(!doc.exists) return
            let user = JSON.stringify(doc.data())
            localStorage.setItem('user', user)
            user = JSON.parse(user)
            this.setState({user})
        })
           
    }

    onChange = (field, value) => {
        const {user} = this.state
        user[field] = value
        this.setState({user})
        this.validateData()
    }

    validateData = () => {
        let validated = true
        const errors = {}
        const {user} = this.state
        if(!user.firstName || user.firstName.length < 2){
            validated = false
            errors.firstName = "Completa tus nombres"
        }
        if(!user.lastName || user.lastName.length < 2){
            validated = false
            errors.lastName = "Completa tus apellidos"
        }
        if(!user.email || user.email.length < 5 || !user.email.includes('@')){
            validated = false
            errors.email = "Escribe un email valido"
        }
        if(!user.phoneNumber || user.phoneNumber.length < 10 ){
            validated = false
            errors.phoneNumber = "Tu teléfono debe tener 10 digitos"
        }
        //return result
        this.setState({errors})
        return validated
    }

    handleOk = (e) => {
        this.setState({
          loading:true
        });
        if(!this.validateData()) return
        //add the validated field
        const {user} = this.state
        // user.validated = true
        updateUser(user)
        .then(user=>{
            this.setState({loading:false, visible:false, respaldo:{...this.state.user}})
            swal("¡Maravilloso!", "Ahora, ¡Solo falta que confirmes el E-mail que te hemos mandado!", "success");
        })
        .catch(e=>console.log(e))
      }
    
      handleCancel = (e) => {
        this.setState({
          visible: false,
          user:{...this.state.respaldo},
          errors:{}
        });
      }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }

    

    render(){
        //console.log(this.state.respaldo)
        const {errors, logged, user, visible} = this.state
        if(!logged) return null
        return(
        <section>

            <div className="flex-profile">
                <ProfileDisplay 
                    errors={errors}
                    visible={visible}
                    showModal={this.showModal}
                    handleCancel={this.handleCancel}
                    handleOk={this.handleOk}
                    onChange={this.onChange} 
                    {...user} 
                />
                <Enrolled
                    user={user}
                />
            </div>


        </section>
        )
    }
}

export default ProfilePage