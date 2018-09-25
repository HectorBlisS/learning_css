import React from 'react';
import {Icon, Modal, Divider} from 'antd';

export const LoginModal = ({visible, handleCancel, facebookLogin, googleLogin}) => (

  <div>
    <Modal style={{textAlign: 'center'}} footer={null} title="Login" visible={visible} onCancel={handleCancel}>
      <div className='login-modal-fb' >
        <Icon type="facebook" theme="outlined" onClick={facebookLogin}/>
        <p>Facebook</p>
      </div>
      <Divider />
      <div className='login-modal-go'>
        <Icon classname='logo-google' type="google" theme="outlined" onClick={googleLogin}/>
        <p>Google</p>
      </div>
    </Modal>
  </div>

);

