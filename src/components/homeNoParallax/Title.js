import React from 'react';
import {Button} from "antd";
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
      <Button loading={loading} onClick={handleShow} size='large' type='primary'>Regístrate</Button>
    </div>
  )
};

