import React, {Component} from 'react'
import {
    Avatar, 
    Divider, 
    Card, 
    Button, 
    Modal,
    Input
} from 'antd'
import {logOut} from '../../services/firebase'


const pic = "http://www.refreshmiami.com/wp-content/uploads/2017/06/55085_logo-ironhack.png"

class ProfileDisplay extends Component{

    
    onChange = (e) => {
        const value = e.target.value
        const field = e.target.name
        this.props.onChange(field, value)
        
    }

    render(){
        //const {} = this.state
        const {
            visible, 
            showModal,
             loading, 
             handleOk, 
             handleCancel, 
             displayName, 
             photoURL, 
             email,
             firstName,
            lastName,
            phoneNumber,
            errors,
            validated
            } = this.props
        return(
            <div className="profile" >
                <Card style={{textAlign:"center"}}> 
                    <a target="_blank" href="http://www.irohack.com">
                    <img width="200" src="https://miro.medium.com/max/2400/1*R4stmAmUMIwzP2yjrR82Fw.png" alt="ironhack logo" />
                    </a>
                    <Divider />
                    <Avatar size={200} src={photoURL ? photoURL + '?type=large' : pic} />
                    <br/>
                    <h2>{displayName}</h2>
                    <h3 style={{color:"lightskyblue"}} >{email}</h3>
                    <Divider />
                    <Button onClick={showModal} type={validated ? "dashed" : "primary"}>
                        {validated ? "Edita tus datos":"Completa tus datos"}
                    </Button>
                    <br/>
                    <br/>
                    <Button 
                    onClick={logOut}
                    type="danger" 
                    >
                        Cerrar Sesión
                    </Button>

                </Card>





        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          confirmLoading={loading}
          
        >
          <p>
              Nombre de usuario
              <Input disabled onChange={this.onChange} name="displayName" value={displayName} />
          </p>
          <p>
              Nombres
              <Input style={errors.firstName && {borderColor:"red"}} onChange={this.onChange} name="firstName" value={firstName} />
              <span style={{color:'red'}} >{errors.firstName}</span>
          </p>
          <p>
              Apellidos
              <Input style={errors.lastName && {borderColor:"red"}} onChange={this.onChange} name="lastName" value={lastName} />
              <span style={{color:'red'}} >{errors.lastName}</span>
          </p>
          <p>
              Teléfono
              <Input style={errors.phoneNumber && {borderColor:"red"}} onChange={this.onChange} name="phoneNumber" value={phoneNumber} />
              <span style={{color:'red'}} >{errors.phoneNumber}</span>
          </p>
          <p>
              Correo electrónico
              <Input style={errors.email && {borderColor:"red"}} onChange={this.onChange} name="email" value={email} />
              <span style={{color:'red'}} >{errors.email}</span>
          </p>
          
        </Modal>
            </div>
        )
    }
}

export default ProfileDisplay