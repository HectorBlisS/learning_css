import React, {Component} from 'react'
import { Parallax } from "react-parallax";
import { Button, Icon } from 'antd';
import layer from '../../assets/Screen Shot 2018-09-18 at 16.53.00.png';
import white from '../../assets/finalfinal.jpg';

class HomePage extends Component {
  render(){
    return(
      <div className='container'>

        <div className='header'>
          <img src='https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png' alt='banner' width='4%'/>
          <Button onClick={() => this.props.history.push('/')} size='large' type='primary'>Comenzar ahora</Button>
        </div>

        <Parallax bgImage={layer} blur={{ min: -1, max: 5 }} strength={500}>
          <div style={{ height: '95vh', width: '100vw', backgroundColor: 'rgba(0,0,0,.7)'  }}>
            <div className='inside-styles-90'>
              <img src='https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png' alt='logo' width='10%'/>
              <h1>APRENDE DISEÑO WEB DESDE CERO EN LÍNEA</h1>
              <h2>CREA ANIMACIONES CON HTML, CSS Y JAVASCRIPT</h2>
              <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <span>25 VIDEOS</span>
                <span>2 HORAS</span>
                <span>1 EXAMEN</span>
                <span>ACOMPAÑAMIENTO POR UN EXPERTO</span>
                <span>100% ONLINE - GRATUITO</span>
              </div>
              <Button onClick={() => this.props.history.push('/')} style={{marginTop: '70px', height: 50}} size='large' type='primary'>Comenzar ahora</Button>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '90vh' }}>
            <div className='inside-styles-50'>
              <h3>¿Por qué este curso en línea?</h3>
              <p>En un mundo gobernado por la tecnología es más necesario que la gente sepa programar. Estamos convencidos que cualquier persona debería de tener el acceso a este aprendizaje. Este curso gratuito está completamente diseñado para principiantes. A lo largo del curso serás guiado por expertos de Ironhack y verás lo fácil que es aprender a programar, sobre todo de mano de nuestro equipo. Ya no busques excusas, ¡es hora de lanzarte al mundo de la programación!</p>
              <iframe style={{marginTop: 90}} title='video_bliss' width="560" height="315" src="https://www.youtube.com/embed/dV9SGtDNef4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '40vh' }}>
            <div className='inside-styles-50'>
              <h3>Descripción del curso</h3>
              <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <div>
                  <h4>PUNTO 1</h4>
                  <p>Descripción 1</p>
                </div>
                <div>
                  <h4>PUNTO 2</h4>
                  <p>Descripción 2</p>
                </div>
                <div>
                  <h4>PUNTO 3</h4>
                  <p>Descripción 3</p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '70vh' }}>
            <div className='inside-styles-50'>
              <h3>Acerca de Ironhack </h3>
              <p>
                Fundada en 2013 por Ariel Quiñones y Gonzalo Manrique, Ironhack es una tech school con sede en Madrid, Barcelona, Miami, París, Ciudad de México, Berlín, Amsterdam y Sao Paulo que forma personal capacitado para ocupar nuevos empleos digitales. Ironhack ya ha formado a más de 1,500 estudiantes de 60 nacionalidades distintas en tan solo cuatro años y ha sido reconocida como una de las 3 mejores escuelas del mundo por coursereport.com y switchup.org. La misión de Ironhack: permitir que cualquier persona sea protagonista de la revolución digital. El 85% de los estudiantes encuentran empleo en los tres meses siguientes a su formación.
              </p>
              <iframe style={{marginTop: 30}} title='campus_mx' width="560" height="315" src="https://www.youtube.com/embed/qG6s6Bk3nMU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '10vh' }}>
            <div className='inside-styles-50'>
              <Button type='primary' size='large'><a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.ironhack.com/es" target='_blank'>Visita nuestro sitio web</a></Button>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '85vh' }}>
            <div className='inside-styles-50'>
              <h3>El Instructor</h3>
              <img src="https://miro.medium.com/fit/c/240/240/0*jp3IFb08Sy3_k3N_." alt="Bliss" style={{margin: 50, borderRadius: '50%'}}/>
              <h4>Héctor Bliss</h4>
              <p>Soy de la generación que jugó con Atari, aprendió comandos MSDOS en windows 95, vió jugar a Michael Jordan y ahora usa una Mac para programar con Android. Todo en la misma vida.</p>
            </div>
          </div>
        </Parallax>

        <div className='footer'>
          <div>
            <h4>Síguenos</h4>
            <div>
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/ironhackMEX"><Icon className='icon' type="twitter" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ironhackMEX/"><Icon className='icon' type="facebook" theme="filled" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/ironhackmex/?hl=es"><Icon className='icon' type="instagram" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/ironhack"><Icon className='icon' type="github" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCWD3Q1-d9vzxt1cXUmpbjqg"><Icon className='icon' type="youtube" theme="outlined" /></a>
            </div>

          </div>
          <div>
            <h4>Contáctanos</h4>
            <div>
              <a rel="noopener noreferrer" target="_blank" href="mailto:contactomex@ironhack.com">contactomex@ironhack.com</a>
              <a rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=525530391903">55 30 391 903</a>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage;