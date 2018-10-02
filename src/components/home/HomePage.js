import React, {Component} from 'react'
import { Parallax } from "react-parallax";
import { Button, Icon } from 'antd';
import layer from '../../assets/Screen Shot 2018-09-18 at 16.53.00.png';
import white from '../../assets/finalfinal.jpg';
import {LoginModal} from "./Modal";
import firebase, {facebookLogin, googleLogin, redirectedUser} from "../../services/firebase";
import {CssIcon, JsIcon, SvgIcon} from './icons'
import swal from 'sweetalert';

class HomePage extends Component {

  state = {
    visible: false,
    loading:true
  };

  componentWillMount(){
    firebase.auth().getRedirectResult().then((result)=>{
      if(!result.user) return this.setState({loading:false})
      // The signed-in user info.
      redirectedUser(result)
      .then(()=>{

        this.setState({loading:false})
        this.props.history.push('/profile')

      })
      .catch(e=>swal("Algo falló", "Intentalo más tarde", "error"))
    })

  }

  handleCancel = () => {
    this.setState({visible:false});
  };

  handleSubmit = () => {
    swal("¡Listo!", "Ahora, ¡Solo falta que confirmes el E-mail que te hemos mandado!", "success");
  };

  handleShow = () => {
    this.setState({visible:true})
  };

  loginWithFacebook = () => {
    facebookLogin()
      // .then(()=>{
      //   this.props.history.push('/profile')
      // })
      // .catch(e=>console.log(e))
  };

  loginWithGoogle = () => {
    googleLogin()
      // .then(()=>{
      //   this.props.history.push('/profile')
      // })
      // .catch(e=>console.log(e))
  };

  render(){
    const {visible, loading} = this.state;
    return(
      <div className='container'>

        <div className='header'>
          <a className='logoanchor' href='https://www.ironhack.com/es' target="_blank" rel="noopener noreferrer" >
            <img src='https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png' alt='banner' />
          </a>
          <Button loading={loading} onClick={this.handleShow} size='large' type='primary'>Coming soon</Button>
        </div>

        <Parallax bgImage={layer} blur={{ min: -1, max: 5 }} strength={500}>
          <div style={{ height: '85vh', width: '100vw', backgroundColor: 'rgba(0,0,0,.7)', marginTop: 50  }}>
            <div className='inside-styles-90'>
              <img style={{marginBottom: 50}} src='https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png' alt='logo' width='10%'/>
              <h1 className='h1-diuri' style={{marginBottom: 30}}>
                APRENDE LOS FUNDAMENTOS DE DISEÑO WEB
              </h1>
              <h2 className='h2-diuri'>
                ANIMACIONES CON HTML, CSS Y JAVASCRIPT
              </h2>
              <div style={{ marginTop: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <span className='span-diuri'>
                  25 VIDEOS
                </span>
                <span className='span-diuri'>
                  2 HORAS
                </span>
                <span className='span-diuri'>
                  1 EXAMEN FINAL
                </span>
                <span className='span-diuri'>
                  100% ONLINE
                </span>
                <span className='span-diuri'>
                  GRATUITO
                </span>
              </div>
              <Button loading={loading} onClick={this.handleShow} style={{marginTop: 70, height: 50}} size='large' type='primary'>Coming soon</Button>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '90vh', marginTop: 70 }}>
            <div className='inside-styles-50'>
              <h3 className='h3-diuri' style={{marginBottom: 30}}>¿Por qué tomar un curso de diseño web?</h3>
              <h5 className='h5-diuri'>
                En un mundo gobernado por la tecnología es necesario que la gente tenga bases sólidas de programación web; en Ironhack estamos convencidos
                que cualquier persona debería de tener el acceso a este aprendizaje. Por eso creamos este <strong>curso gratuito</strong> que está
                completamente diseñado para principiantes y guiado por expertos de Ironhack. Verás lo fácil que es aprender a programar, sobre todo de mano
                de nuestro equipo. No hay excusas, ¡es hora de lanzarte al mundo de la programación!
              </h5>
              <iframe style={{marginTop: 50}} title='video_bliss' width="560" height="315" src="https://www.youtube.com/embed/dV9SGtDNef4"></iframe>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '90vh', marginTop: 50 }}>
            <div className='inside-styles-90'>
              <h3 className='h3-diuri'>Descripción del curso</h3>
              <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexGro: '1' }}>
                <div className='points'>
                  <CssIcon className='icons-svg' />
                  <h4 className='h4-diuri'>Animaciones CSS</h4>
                  <h5 className='h5-diuri'>
                    Aprenderás a crear animaciones solo con css. Utilizaremos atributos básicos como <i>transition</i> para animaciones básicas hasta crear
                    keyframes para crear animaciones reutilizables 2D y 3D
                  </h5>
                </div>
                <div className='points'>
                  <JsIcon className='icons-svg' />
                  <h4 className='h4-diuri'>JavaScript</h4>
                  <h5 className='h5-diuri'>
                    Aprenderás a utilizar JavaScript en conjunto de CSS para crear animaciones más complejas y crear interactividad con el usuario. También
                    entenderás cómo usar jQuery de una manera amena y sencilla.
                  </h5>
                </div>
                <div className='points'>
                  <SvgIcon className='icons-svg' />
                  <h4 className='h4-diuri'>SVG</h4>
                  <h5 className='h5-diuri'>
                    Como contenido <i>bonus</i> aprenderás qué es una imágen SVG. Crearemos una a mano para explorar esta tecnología y la manipularás con CSS
                    para crear animaciones increíbles para tus proyectos.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
    
        <Parallax bgImage={white} strength={-200} >
          <div style={{ marginTop: 30, width: '90vw', height: '90vh' }}>
            <div className='inside-styles-80'>
              <h3 className='h3-diuri' style={{marginBottom: 50}}>El Instructor</h3>
              <img src={require('../../assets/blissiimg.gif')} alt="Bliss" style={{width: "20%", borderRadius: "50%", marginBottom: 30}}/>
              <h4 className='h4-diuri'>Héctor Bliss</h4>
                <h5 className='h6-diuri' style={{marginTop: 30}}>
                  Bliss, es un desarrollador obsesionado con aprender cómo funciona la tecnología y herramientas que usan empresas de gran tamaño como
                  Google, Uber, Airbnb o Facebook. Si no está aprendiendo un tema nuevo lo puedes encontrar compartiendo y enseñando en comunidad de forma
                  gratuita. Con más de 6 años enseñando tecnología Bliss comparte tanto en los grupos oficiales de Google para desarrolladores como en el
                  ecosistema emprendedor de México ayudando a emprendedores a aterrizar sus ideas tecnológicas. Héctor es el fundador de la comunidad
                  oficial de Google: #FirebaseMX ha sido instructor en diferentes bootcamps y escuelas de <i>coding</i> en toda la republica mexicana.
                  Actualmente es el <i>Lead Teacher</i> en el curso de Desarrollo Web de tiempo completo en Ironhack México.
                </h5>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '90vh', marginTop: 70 }}>
            <div className='inside-styles-80'>
              <h3 className='h3-diuri'>Acerca de Ironhack </h3>
              <h5 className='h5-diuri'>
                Ironhack es una escuela que ofrece bootcamps presenciales en Desarrollo Web y Diseño UX/UI, con campus en Madrid, Barcelona, Miami, París,
                Berlín, Amsterdam, Sao Paulo y ahora Ciudad de México. Ironhack ha formado a más de 1,500 estudiantes de 60 nacionalidades distintas y es
                reconocida como una de las 3 mejores escuelas de educación tecnológica del mundo por <a href='https://www.coursereport.com/schools/ironhack'               target='_blank' rel="noopener noreferrer">Course Report</a> y <a href='https://www.switchup.org/bootcamps/ironhack' target='_blank'                       rel="noopener noreferrer">Switch Up</a>. La misión de Ironhack es permitir que cualquier persona sea protagonista de la revolución digital
                y pueda dar un giro a su carrera. El 85% de los estudiantes encuentran empleo en los tres meses siguientes a su formación.
              </h5>
              <iframe style={{marginTop: 60}} title='campus_mx' width="560" height="315" src="https://www.youtube.com/embed/qG6s6Bk3nMU"></iframe>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div style={{ width: '90vw', height: '30vh' }}>
            <div className='inside-styles-50'>
              <Button size='large'><a style={{textDecoration: 'none'}} rel="noopener noreferrer" href="https://www.ironhack.com/es" target='_blank'>Visita
                nuestro sitio web</a></Button>
            </div>
          </div>
        </Parallax>

        <div className='footer'>
          <div>
            <h4 className='h4-diuri' style={{color:'white'}}>Síguenos</h4>
            <div>
              <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/ironhackMEX"><Icon className='icon' type="twitter" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/ironhackMEX/"><Icon className='icon' type="facebook" theme="filled" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/ironhackmex/?hl=es"><Icon className='icon' type="instagram" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://github.com/ironhack"><Icon className='icon' type="github" theme="outlined" /></a>
              <a rel="noopener noreferrer" target="_blank" href="https://www.youtube.com/channel/UCWD3Q1-d9vzxt1cXUmpbjqg"><Icon className='icon' type="youtube" theme="outlined" /></a>
            </div>
          </div>
          <div>
            <h4 className='h4-diuri' style={{color:'white'}}>Contáctanos</h4>
            <div>
              <a rel="noopener noreferrer" target="_blank" href="mailto:contactomex@ironhack.com">contactomex@ironhack.com</a>
              <a rel="noopener noreferrer" target="_blank" href="https://api.whatsapp.com/send?phone=525530391903">55 30 391 903</a>
            </div>
          </div>
        </div>

        <LoginModal visible={visible} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel} facebookLogin={this.loginWithFacebook} googleLogin={this.loginWithGoogle}/>

      </div>
    )
  }
}

export default HomePage;