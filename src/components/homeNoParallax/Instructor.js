import React from 'react';
import bliss from '../../assets/blissiimg.gif';

export const Instructor = () => {
  return (
    <div className='instructor'>
      <h3>El Instructor</h3>
      <img src={bliss} alt="Instructor_Bliss"/>
      <h5>
        <strong>Bliss</strong>, es un desarrollador obsesionado con aprender cómo funciona la tecnología y herramientas que usan empresas de gran tamaño como <i>Google</i>, <i>Uber</i>, <i>Airbnb</i> o <i>Facebook</i>. Si no está aprendiendo un tema nuevo lo puedes encontrar compartiendo y enseñando en
        comunidad de forma gratuita. <strong>Con más de 6 años enseñando tecnología Bliss comparte tanto en los grupos oficiales de Google para
        desarrolladores como en el ecosistema emprendedor de México ayudando a emprendedores a aterrizar sus ideas tecnológicas</strong>. Héctor es el
        fundador de la comunidad oficial de Google: <strong>#FirebaseMX</strong>. Ha sido instructor en diferentes bootcamps y escuelas de <i>coding</i> en
        toda la republica mexicana. Actualmente es el <strong><i>Lead Teacher</i></strong> en el curso de <strong>Desarrollo Web</strong> de tiempo completo
        en <strong>Ironhack México</strong>.
      </h5>
    </div>
  )
};

