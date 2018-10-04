import React from 'react';
import { Modal,  Input, Form, Button} from 'antd';

export const LoginModal = ({email, onEmailChange, error, visible, handleCancel, handleSubmit, facebookLogin, googleLogin}) => (

  <div>
    <Modal style={{textAlign: 'center'}} footer={null} title="Regístrate" visible={visible} onCancel={handleCancel}>
{/*     <div className='login-modal-fb' onClick={facebookLogin} >
        <Icon type="facebook" theme="outlined" />
        <p>Facebook</p>
      </div>
      <Divider />
      <div className='login-modal-go' onClick={googleLogin}>
        <Icon classname='logo-google' type="google" theme="outlined" />
        <p>Gmail</p>
      </div>*/}

         <p>Déjanos tu correo y sé de los primeros en tomar este curso</p>
      <Form.Item
        validateStatus={error ? "error":"success"}
        help={error && <span style={{color:"red"}} >Introduce un correo electrónico válido</span>}
      >
        <Input value={email} onChange={onEmailChange} name="email" error={error} type='email' placeholder='Email'/>
      </Form.Item>
     
        <Button onClick={handleSubmit} style={{marginTop: 30}} type='primary'> Enviar </Button>
    </Modal>
  </div>

);

