import React from 'react';
import { Modal,  Input, Button} from 'antd';

export const LoginModal = ({visible, handleCancel, facebookLogin, googleLogin}) => (

  <div>
    <Modal style={{textAlign: 'center'}} footer={null} title="Registrate" visible={visible} onCancel={handleCancel}>
{/*      <div className='login-modal-fb' >
        <Icon type="facebook" theme="outlined" onClick={facebookLogin}/>
        <p>Facebook</p>
      </div>
      <Divider />
      <div className='login-modal-go'>
        <Icon classname='logo-google' type="google" theme="outlined" onClick={googleLogin}/>
        <p>Google</p>
      </div>*/}

      <p>Dejanos tu correo y te avisaremos cuando esté listo el curso</p>
      <Input type='email' placeholder='Email'/>
      <Button style={{marginTop: 30}} type='primary'> Enviar </Button>
    </Modal>
  </div>

);

