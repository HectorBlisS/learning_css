import React, {Component} from 'react'
import { Parallax } from "react-parallax";
import { Button, Icon } from 'antd';
import layer from '../../assets/Screen Shot 2018-09-18 at 16.53.00.png';
import white from '../../assets/finalfinal.jpg';
import {LoginModal} from "./Modal";
import {facebookLogin, googleLogin} from "../../services/firebase";

class HomePage extends Component {

  state = {
    visible: false
  };

  handleCancel = () => {
    this.setState({visible:false})
  };

  handleShow = () => {
    this.setState({visible:true})
  };

  loginWithFacebook = () => {
    facebookLogin()
      .then(()=>{
        this.props.history.push('/profile')
      })
      .catch(e=>console.log(e))
  };

  loginWithGoogle = () => {
    googleLogin()
      .then(()=>{
        this.props.history.push('/profile')
      })
      .catch(e=>console.log(e))
  };

  render(){
    const {visible} = this.state;
    return(
      <div className='container'>

        <div className='header'>
          <a className='logoanchor' href='https://www.ironhack.com/es' target="_blank" rel="noopener noreferrer" >
            <img src='https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png' alt='banner' />
          </a>
          <Button onClick={this.handleShow} size='large' type='primary'>Cooming soon</Button>
          <a onClick={this.loginWithGoogle} >Login</a>
        </div>

        <Parallax bgImage={layer} blur={{ min: -1, max: 5 }} strength={500}>
          <div style={{ height: '95vh', width: '100vw', backgroundColor: 'rgba(0,0,0,.7)'  }}>
            <div className='inside-styles-90'>
              <img style={{marginBottom: 30}} src='https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png' alt='logo' width='10%'/>
              <h1 className='h1-diuri' style={{marginBottom: 30}}>APRENDE DISEÑO WEB DESDE CERO EN LÍNEA</h1>
              <h2 className='h2-diuri'>ANIMACIONES CON HTML, CSS Y JAVASCRIPT</h2>
              <div style={{ marginTop: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <span className='span-underline span-diuri'>25 VIDEOS</span>
                <span className='span-underline span-diuri'>1 HORA</span>
                <span className='span-underline span-diuri'>1 EXAMEN FINAL</span>
                <span className='span-underline span-diuri'>100% ONLINE</span>
                <span className='span-underline span-diuri'>GRATUITO</span>
              </div>
              <Button onClick={this.handleShow} style={{marginTop: 100, height: 50}} size='large' type='primary'>Coming soon</Button>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '90vh' }}>
            <div className='inside-styles-50'>
              <h3 className='h3-diuri'>¿Por qué tomar este curso en línea?</h3>
              <p>
                En un mundo gobernado por la tecnología es más necesario que la gente sepa programar. 
                Estamos convencidos que cualquier persona debería de tener el acceso a este aprendizaje. 
                Este curso gratuito está completamente diseñado para principiantes. 
                A lo largo del curso serás guiado por expertos de Ironhack y verás lo fácil que es aprender a programar, 
                sobre todo de mano de nuestro equipo. Ya no busques excusas, 
                ¡es hora de lanzarte al mundo de la programación!
                </p>
              <iframe style={{marginTop: 90}} title='video_bliss' width="560" height="315" src="https://www.youtube.com/embed/dV9SGtDNef4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '40vh' }}>
            <div className='inside-styles-50'>
              <h3 className='h3-diuri'>Descripción del curso</h3>
              <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <div>
                  <h4 className='h4-diuri'>Animaciones CSS</h4>
                  <p>

                    Aprenderás a crear animaciones solo con css, utilizaremos atributos básicos como transition 
                    para animaciones básicas hasta crear keyframes para crear animaciones reutilizables 2D y 3D.

                  </p>
                </div>
                <div>
                  <h4 className='h4-diuri'>JavaScript</h4>
                  <p>

                    Aprenderás a utilizar JavaScript en conjunto de css para crear animaciones más complejas y crear interactividad con el usuario,
                    aprenderás a usar jQuery de una manera amena y sencilla.

                  </p>
                </div>
                <div>
                  <h4 className='h4-diuri'>SVG</h4>
                  <p>

                    Cómo contenido "bonus" aprenderás qué es una imagen SVG, crearemos una a mano para explorar está tecnología, y la manipularas con css para
                    crear animaciones increibles para tus proyectos.

                  </p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
    
        <Parallax bgImage={white} strength={-200}>
          <div style={{ marginTop:100, width: '90vw', height: '85vh' }}>
            <div className='inside-styles-50'>
              <h3 className='h3-diuri'>El Instructor</h3>
              <img src={require('../../assets/bliss.jpg')} alt="Bliss" style={{width: "40%", borderRadius: "50%", margin: 50}}/>
              <h4>Héctor Bliss</h4>
              <p>Bliss, es un desarrollador obsesionado con aprender cómo funciona la tecnología y herramientas que usan empresas de gran tamaño como Google, Uber, Airbnb o Facebook,
                si no está aprendiendo un tema nuevo lo puedes encontrar compartiendo y enseñando en comunidad de forma gratuita, con más de 6 años enseñando tecnología Bliss, 
                comparte tanto en los grupos oficiales de Google para desarrolladores
                como en el ecosistema emprendedor de México ayudando a emprendedores a aterrizar sus ideas tecnológicas. Héctor es el fundador de la comunidad oficial de Google: #FirebaseMX ha sido instructor en diferentes bootcamps 
                y escuelas de "coding" en toda la republica mexicana. Actualmente es el "Lead Teacher" en el curso de desarrollo web de tiempo completo de Ironhack en México.
                Bliss es muy buen programador, pero él se considera a si mismo un educador, ya que su irreverencia y su estilo único te harán reir mientras aprendes temas muy complejos. 
                 </p>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '70vh', marginTop: 70 }}>
            <div className='inside-styles-50'>
              <h3 className='h3-diuri'>Acerca de Ironhack </h3>
              <p>
                Ironhack es una escuela presencial basada en el modelo <i>bootcamp</i> con campuses en Madrid, Barcelona, Miami, París, Berlín, Amsterdam, Sao Paulo y ahora Ciudad de México. Ironhack ya ha formado a más de 1,500 estudiantes de 60 nacionalidades distintas en Desarrollo Web y UX/UI Design y ha sido reconocida como una de las 3 mejores escuelas del mundo por <a href='https://www.coursereport.com/schools/ironhack' target='_blank' rel="noopener noreferrer">Course Report</a> y <a href='https://www.switchup.org/bootcamps/ironhack' target='_blank' rel="noopener noreferrer">Switch Up</a>. La misión de Ironhack: permitir que cualquier persona sea protagonista de la revolución digital y pueda dar un giro a su carrera. El 85% de los estudiantes encuentran empleo en los tres meses siguientes a su formación.
              </p>
              <iframe style={{marginTop: 70}} title='campus_mx' width="560" height="315" src="https://www.youtube.com/embed/qG6s6Bk3nMU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '30vh' }}>
            <div className='inside-styles-50'>
              <Button size='large'><a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.ironhack.com/es" target='_blank'>Visita nuestro sitio web</a></Button>
            </div>
          </div>
        </Parallax>

        <div className='footer'>
          <div>
            <h4 className='h4-diuri'>Síguenos</h4>
            <div>
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/ironhackMEX"><Icon className='icon' type="twitter" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ironhackMEX/"><Icon className='icon' type="facebook" theme="filled" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/ironhackmex/?hl=es"><Icon className='icon' type="instagram" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/ironhack"><Icon className='icon' type="github" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCWD3Q1-d9vzxt1cXUmpbjqg"><Icon className='icon' type="youtube" theme="outlined" /></a>
            </div>
          </div>
          <div>
            <h4 className='h4-diuri'>Contáctanos</h4>
            <div>
              <a rel="noopener noreferrer" target="_blank" href="mailto:contactomex@ironhack.com">contactomex@ironhack.com</a>
              <a rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=525530391903">55 30 391 903</a>
            </div>
          </div>
        </div>

        <LoginModal visible={visible} handleCancel={this.handleCancel} facebookLogin={this.loginWithFacebook} googleLogin={this.loginWithGoogle}/>

      </div>
    )
  }
}

export default HomePage;