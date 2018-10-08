import React, {Component} from 'react'
import { Parallax } from "react-parallax";
import {Button, Icon} from 'antd';
import layer from '../../assets/Screen Shot 2018-09-18 at 16.53.00.png';
import white from '../../assets/finalfinal.jpg';
import bliss from '../../assets/blissiimg.gif';
import {LoginModal} from "./Modal";
import firebase, {facebookLogin, googleLogin, redirectedUser, saveEmail} from "../../services/firebase";
import {CssIcon, JsIcon, SvgIcon} from './icons'
import swal from 'sweetalert';

class HomePage extends Component {

  state = {
    visible: false,
    loading:true,
    email:null,
    error:false
  };

  componentWillMount(){
    firebase.auth().getRedirectResult().then((result)=>{
      if(!result.user) return this.setState({loading:false});
      // The signed-in user info.
      redirectedUser(result)
      .then(()=>{

        this.setState({loading:false});
        this.props.history.push('/profile')

      })
      .catch(e=>swal("Algo falló", "Intentalo más tarde", "error"))
    })

  }

  handleCancel = () => {
    this.setState({visible:false});
  };

  handleSubmit = () => {
    const {email} =  this.state
    if(!email || !email.includes('@') || email.includes(' ')){
      this.setState({error:true})
    }else{
      this.setState({error:false})
      saveEmail(email)
      .then(()=>{
        this.setState({visible:false})
        swal("¡Gracias!", "Nos pondremos en contacto contigo cuando lancemos el curso.", "success");
      })
      .catch(e=>{
        this.setState({visible:false})
        swal("!Algo pasó¡", "No pudimos guardar tu correo, intenta más tarde.", "error");
      })
    }
    
  };

  onEmailChange = (e) => {
    this.setState({email:e.target.value})
  }

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
          <Button loading={loading} onClick={this.handleShow} size='large' type='primary'>Regístrate</Button>
        </div>

        <Parallax className="parallax" bgImage={layer} blur={{ min: -1, max: 5 }} strength={500}>
          <div className='shadow'>
            <div className='inside-styles-90'>
              <img src='https://cdn-images-1.medium.com/max/1200/1*69RcxrWXuk385lSxkIYYLA.png' alt='logo' />
              <h1 className='h1-diuri' >
                APRENDE LOS FUNDAMENTOS DE DISEÑO WEB
              </h1>
              <h2 className='h2-diuri'>
                ANIMACIONES CON HTML, CSS Y JAVASCRIPT
              </h2>
              <div className='desc-points' >
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
              <Button className='button-first-page' loading={loading} onClick={this.handleShow} size='large' type='primary'>Regístrate</Button>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div className='second-section' >
            <div className='inside-styles-50'>
              <h3 className='h3-diuri'>¿Por qué tomar un curso de Diseño Web?</h3>
              <h5 className='h5-diuri'>
                En un mundo gobernado por la tecnología es necesario que la gente tenga bases sólidas de programación web; en Ironhack estamos convencidos
                que cualquier persona debería de tener el acceso a este aprendizaje. Por eso creamos este <strong>curso gratuito</strong> que está
                completamente diseñado para principiantes y guiado por expertos de Ironhack. Verás lo fácil que es aprender a programar, sobre todo de mano
                de nuestro equipo. No hay excusas, ¡es hora de lanzarte al mundo de la programación!
              </h5>
              {/*<iframe title='video_bliss' src="https://www.youtube.com/embed/dV9SGtDNef4"></iframe> */}
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div className='third-section'>
            <div className='inside-styles-90'>
              <h3 className='h3-diuri'>Descripción del curso</h3>
              <div className='desc-3'>
                <div className='points'>
                  <CssIcon className='icons-svg' />
                  <h4 className='h4-diuri'>Animaciones CSS</h4>
                  <h5 className='h5-diuri'>
                    Aprenderás a crear animaciones solo con CSS. Utilizaremos atributos básicos como <i>transition</i> para animaciones básicas hasta crear
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
          <div className='fourth-section'>
            <div className='inside-styles-80'>
              <h3 className='h3-diuri'>El Instructor</h3>
              <img className='bliss' src={bliss} alt="Bliss"/>
              <h4 className='h4-diuri'>Héctor Bliss</h4>
              <h5 className='h5-diuri'>
                <strong>Bliss</strong>, es un desarrollador obsesionado con aprender cómo funciona la tecnología y herramientas que usan empresas de gran tamaño como <i>Google</i>, <i>Uber</i>, <i>Airbnb</i> o <i>Facebook</i>. Si no está aprendiendo un tema nuevo lo puedes encontrar compartiendo y enseñando en comunidad de forma
                gratuita. <strong>Con más de 6 años enseñando tecnología Bliss comparte tanto en los grupos oficiales de Google para desarrolladores como en el
                ecosistema emprendedor de México ayudando a emprendedores a aterrizar sus ideas tecnológicas</strong>. Héctor es el fundador de la comunidad
                oficial de Google: <strong>#FirebaseMX</strong>. Ha sido instructor en diferentes bootcamps y escuelas de <i>coding</i> en toda la republica mexicana.
                Actualmente es el <strong><i>Lead Teacher</i></strong> en el curso de <strong>Desarrollo Web</strong> de tiempo completo en <strong>Ironhack México</strong>.
              </h5>
            </div>
          </div>
        </Parallax>

        <Parallax bgImage={white} strength={-200}>
          <div className='fifth-section'>
            <div className='inside-styles-80'>
              <h3 className='h3-diuri'>Acerca de Ironhack</h3>
              <h5 className='h5-diuri'>
                Ironhack es una escuela que ofrece bootcamps presenciales en <strong>Desarrollo Web y Diseño UX/UI</strong>, con campus en Madrid,
                Barcelona, Miami, París,
                Berlín, Amsterdam, Sao Paulo y ahora <strong>Ciudad de México</strong>. Ironhack ha formado a más de 1,500 estudiantes de 60 nacionalidades
                distintas y es reconocida como una de las 3 mejores escuelas de educación tecnológica del mundo por <a href='https://www.courserepor
                .com/schools/ironhack' target='_blank' rel="noopener noreferrer">Course Report</a> y <a href='https://www.switchup.org/bootcamps/ironhack'
                                                                                                        target='_blank' rel="noopener noreferrer">SwitchUp</a>. La misión de Ironhack es permitir
                que cualquier persona sea protagonista de la revolución digital y pueda dar un giro a su carrera. <strong>El 85% de los estudiantes encuentran empleo en los tres meses siguiente
                a su formación.</strong>
              </h5>
              <video ref="vid" controls controlsList="nodownload"
                src='https://firebasestorage.googleapis.com/v0/b/landingpagecss.appspot.com/o/Discover_Ironhack_Mexico_City(youtube.com).mp4?alt=media&token=9d44d1b7-d7a1-4e23-8053-20beccce749d'></video>
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

        <LoginModal onEmailChange={this.onEmailChange} email={this.state.email} error={this.state.error} visible={visible} handleSubmit={this.handleSubmit} handleCancel={this.handleCancel} facebookLogin={this.loginWithFacebook} googleLogin={this.loginWithGoogle}/>

      </div>
    )
  }
}

export default HomePage;