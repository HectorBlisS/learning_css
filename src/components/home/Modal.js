import React from 'react';
import { Modal,  Input, Divider, Icon, Button} from 'antd';

export const LoginModal = ({visible, handleCancel, facebookLogin, googleLogin}) => (

  <div>
    <Modal style={{textAlign: 'center'}} footer={null} title="Registrate" visible={visible} onCancel={handleCancel}>
     <div className='login-modal-fb' onClick={facebookLogin} >
        <Icon type="facebook" theme="outlined" />
        <p>Facebook</p>
      </div>
      <Divider />
      <div className='login-modal-go' onClick={googleLogin}>
        <Icon classname='logo-google' type="google" theme="outlined" />
        <p>Google</p>
      </div>

      {/* <p>Déjanos tu correo y sé de los primeros en tomar este curso</p>
      <Input type='email' placeholder='Email'/>
      <Button onClick={handleCancel} style={{marginTop: 30}} type='primary'> Enviar </Button> */}
    </Modal>
  </div>

);

