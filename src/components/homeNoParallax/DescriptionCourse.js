import React from 'react';
import {CssIcon, JsIcon, SvgIcon} from "../home/icons";

export const DescriptionCourse = () => {
  return (
    <div className='descCourse'>
      <h3>Descripción del curso</h3>
      <div className='desc-3'>
        <div className='points'>
          <CssIcon className='icons-svg'/>
          <h4>Animaciones CSS</h4>
          <h5>
            Aprenderás a crear animaciones solo con CSS. Utilizaremos atributos básicos como <i>transition</i> para animaciones básicas hasta crear
            keyframes para crear animaciones reutilizables 2D y 3D
          </h5>
        </div>
        <div className='points'>
          <JsIcon className='icons-svg'/>
          <h4>JavaScript</h4>
          <h5>
            Aprenderás a utilizar JavaScript en conjunto de CSS para crear animaciones más complejas y crear interactividad con el usuario. También
            entenderás cómo usar jQuery de una manera amena y sencilla.
          </h5>
        </div>
        <div className='points'>
          <SvgIcon className='icons-svg'/>
          <h4>SVG</h4>
          <h5>
            Como contenido <i>bonus</i> aprenderás qué es una imágen SVG. Crearemos una a mano para explorar esta tecnología y la manipularás con CSS
            para crear animaciones increíbles para tus proyectos.
          </h5>
        </div>
      </div>
    </div>
  )
};