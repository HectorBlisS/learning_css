import React, {Component} from 'react'
import {Card} from 'antd'
import {Link} from 'react-router-dom'


class CourseMenu extends Component{

    state = {
        current:null,
        videos:this.props.videos
    }

    setVideo = (id) => {
        this.props.setLink(id)
    }

    render(){
        const {title="Animaciones con HTML, CSS y JavaScript", currentKey} = this.props
        return(
            <Card 
                className="course-menu"
                title={title}>

                <Card.Grid style={separator}>MODULO 1 | ¿Qué son las animaciones CSS?</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("1.1")} style={currentKey === '1.1' ? selectedGridStyle : gridStyle}>Historia de HTML5 </Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("1.2")} style={currentKey === '1.2' ? selectedGridStyle : gridStyle}>Demo</Card.Grid>

                <Card.Grid style={separator}>MODULO 2 | Intro a HTML y CSS</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("2.1")} style={currentKey === '2.1' ? selectedGridStyle : gridStyle}>Herramientas que ocuparemos</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("2.2")} style={currentKey === '2.2' ? selectedGridStyle : gridStyle}>Codepen</Card.Grid>

                <Card.Grid style={separator}>MODULO 3 | Simple animations | transition</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("3.1")} style={currentKey === '3.1' ? selectedGridStyle : gridStyle}>Usando transition shortcut</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("3.2")} style={currentKey === '3.2' ? selectedGridStyle : gridStyle}>Transition properties</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("3.3")} style={currentKey === '3.3' ? selectedGridStyle : gridStyle}>Cubic-bezier</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("3.4")} style={currentKey === '3.4' ? selectedGridStyle : gridStyle}>Ejercicio: Reveal</Card.Grid>

                <Card.Grid style={separator}>MODULO 4 | Complex animations | keyframes</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.1")} style={currentKey === '4.1' ? selectedGridStyle : gridStyle}>Declarando keyframes</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.2")} style={currentKey === '4.2' ? selectedGridStyle : gridStyle}>Aplicando una animación a una clase</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.3")} style={currentKey === '4.3' ? selectedGridStyle : gridStyle}>Creando una animación bounce</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.4")} style={currentKey === '4.4' ? selectedGridStyle : gridStyle}>Creando una animación Reveal</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.5")} style={currentKey === '4.5' ? selectedGridStyle : gridStyle}>Transform Property</Card.Grid>

                <Card.Grid style={separator}>MODULO 5 | 3D animations</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("5.1")} style={currentKey === '5.1' ? selectedGridStyle : gridStyle}>Animación 3D</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("5.2")} style={currentKey === '5.2' ? selectedGridStyle : gridStyle}>Completando la animación</Card.Grid>

                <Card.Grid style={separator}>CONTENIDO OPCONAL 1 | jQuery Interaction</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.1")} style={currentKey === '6.1' ? selectedGridStyle : gridStyle}>¿Qué es jQuery?</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.2")} style={currentKey === '6.2' ? selectedGridStyle : gridStyle}>jQuery CDN</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.3")} style={currentKey === '6.3' ? selectedGridStyle : gridStyle}>Agregando jQuery en codepen</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.4")} style={currentKey === '6.4' ? selectedGridStyle : gridStyle}>Usando jQuery por primera vez</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.5")} style={currentKey === '6.5' ? selectedGridStyle : gridStyle}>hasClass, removeClass, addClass</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.6")} style={currentKey === '6.6' ? selectedGridStyle : gridStyle}>toggleClass</Card.Grid>

                <Card.Grid style={separator}>CONTENIDO OPCONAL 2 | SVG animations</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("7.1")} style={currentKey === '7.1' ? selectedGridStyle : gridStyle}>Qué es SVG</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("7.2")} style={currentKey === '7.2' ? selectedGridStyle : gridStyle}>Dibujando con SVG</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("7.3")} style={currentKey === '7.3' ? selectedGridStyle : gridStyle}>Animando el dibujo SVG</Card.Grid>

                <Card.Grid style={separator}>Conclusiones</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("8.1")} style={currentKey === '8.1' ? selectedGridStyle : gridStyle}>¿Dónde aprender más?</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("8.2")} style={currentKey === '8.2' ? selectedGridStyle : gridStyle}>¿Qué sigue?</Card.Grid>

                <Card.Grid style={separator}>
EXAMEN
                </Card.Grid>
                <Card.Grid style={gridStyle}>
                <Link style={{color:"black"}} to="/exam/animations">
                Responder el Examen
                </Link>
                </Card.Grid>

            </Card>
        )
    }
}

const gridStyle = {
    width: '100%',
    textAlign: 'left',
    cursor:"pointer"
  };
const selectedGridStyle = {
    width: '100%',
    textAlign: 'center',
    cursor:"pointer",
    background:"grey",
    color:'white'
  };

const separator = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width: '100%',
    height:20,
    background:"#2DC5FA",
    textAlign: 'center',
  };

export default CourseMenu