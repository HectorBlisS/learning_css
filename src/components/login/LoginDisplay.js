import React from 'react'
import {Button} from 'antd';

const logo = "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png"


const LoginDisplay = ({googleLogin, facebookLogin}) => {
    return (
        <div className="cover">
        <div className="opacity">
          <img width="200" src={logo} alt="ironhack logo" />
          <hr style={{width:'80%'}} />  
          <div className="perspective">
            <h2>Animaciones CSS</h2>
            <h3>APRENDE A CREAR <b>ANIMACIONES</b> CSS EN <b>25</b> VIDEOS</h3>
            <h4>DESDE LOS FUNDAMENTOS HASTA ANIMACIONES <b>SVG</b> EN SOLO <b>2 HORAS</b></h4>
          </div>
          <hr style={{width:'80%'}} />  
          <br/>
          <h3>¡Aprende hoy mismo!</h3>
          <Button onClick={facebookLogin} type="primary" icon="facebook">Facebook Login</Button>
          <hr />
          <Button onClick={googleLogin} type="danger" icon="google">Gmail Login</Button>
        </div> 
      </div>
    )
}

export default LoginDisplay