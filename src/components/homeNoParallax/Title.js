import React from 'react';
import {Button, Input} from "antd";
import logo from '../../assets/logoironhack.gif'

export const Title = ({loading, handleShow}) => {
  return (
    <div className='titleSection'>
      <img src={logo} alt='logo' />
      <h1>APRENDE LOS FUNDAMENTOS DE DISEÑO WEB</h1>
      <h2>ANIMACIONES CON HTML, CSS Y JAVASCRIPT</h2>
      <div>
        <span>25 VIDEOS</span>
        <span>2 HORAS</span>
        <span>1 EXAMEN FINAL</span>
        <span>100% ONLINE</span>
        <span>GRATUITO</span>
      </div>
      
        <h2 style={{color: 'white', fontSize: '150%', margin: 0, color: '#2DC5FA'}}>AGRÉGATE A LA LISTA DE ESPERA</h2>
        <div style={{display:'flex', justifyContent: 'center'}}>
        <Input  placeholder='Deja tu correo electrónico' style={{width: 350, margin: 10, display:'inline'}} />
        <Button loading={loading} onClick={handleShow} size='large' style={{margin: 0, display:'inline'}} type='primary'>Enviar</Button>
      </div>
    </div>
  )
};

