import React from 'react';
import {Button, Input} from "antd";
import logo from '../../assets/logoironhack.gif'

export const Title = ({error, visible, loading, onChange, email, handleSubmit}) => {
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
      
        <h2 style={{color: 'white', fontSize: '150%', margin: 0, color: '#2DC5FA'}}>{visible ? "AGRÉGATE A LA LISTA DE ESPERA":"TE HEMOS AGREGADO A LA LISTA DE ESPERA"}</h2>
        
        {error && <span style={{margin:0,color:"red"}} >Introduce un correo electrónico válido</span>}
        {visible && <div style={{display:'flex', justifyContent: 'center'}}>
        <Input 
          error={error}
          onChange={onChange} 
          placeholder='Deja tu correo electrónico' 
          style={{width: 350, margin: 10, display:'inline'}} 
          value={email}
          name="email"
          />
        <Button loading={loading} onClick={handleSubmit} size='large' style={{margin: 0, display:'inline'}} type='primary'>Enviar</Button>

      </div>}
    </div>
  )
};

