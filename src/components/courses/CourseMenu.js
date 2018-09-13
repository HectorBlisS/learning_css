import React, {Component} from 'react'
import {Card} from 'antd'


class CourseMenu extends Component{

    state = {
        videos:{
            "1.1":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations1.1.mp4?alt=media&token=f3dcea55-34e3-4913-84b6-26fc574e64d4",
            "1.2":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations1.2.mp4?alt=media&token=875c89c8-d7fd-499a-99d1-a4c743e5a677",
            "2.1":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations2.1.mp4?alt=media&token=9cece7bd-26d8-45a1-bbc5-6ac492ba983f",
            "2.2":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations2.2.mp4?alt=media&token=aa771786-c74c-4a7a-94bd-375024d8a45b",
            "3.1":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimaciones3.1.mp4?alt=media&token=bad06289-eb3a-42a3-aff6-b74fffa686ad",
            "3.2":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations3.2.mp4?alt=media&token=444fff27-e7f0-4ff3-b67b-321f869713e8",
            "3.3":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations3.3.mp4?alt=media&token=3ab3dcc0-63d5-483d-94f4-70ca5563294c",
            "3.4":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations3.4.mp4?alt=media&token=fa39f1a6-eb10-46b6-be94-9e4a8f8ec069",
            "4.1":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations4.1.mp4?alt=media&token=fbd6006c-90e0-4225-b073-596a49639674",
            "4.2":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations4.2.mp4?alt=media&token=2f0486ce-a48a-43a6-98b6-961d45e4eea8",
            "4.3":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations4.3.mp4?alt=media&token=b30a5421-afa1-4436-90b6-cfb6de91a6e9",
            "4.4":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations4.4.mp4?alt=media&token=6b52aa82-7a4b-4dac-a3bd-2739424a82ff",
            "4.5":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations4.5.mp4?alt=media&token=a21c8832-4620-45b8-8d41-638b0c0c8fcb",
            "5.1":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations5.1.mp4?alt=media&token=a25c3ccf-e1d7-4a63-b7e5-51f261675181",
            "5.2":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations5.2.mp4?alt=media&token=5774d700-6fe0-48e6-8de8-4e47f08ff603",
            "6.1":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2Fanim_6.1.mp4?alt=media&token=b3cd6722-ed27-4fd1-b764-bfda67e2cd51",
            "6.2":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2Fanim_6.2.mp4?alt=media&token=f617b913-9bb2-4194-825f-ecc429087749",
            "6.3":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2Fanim_6.3.mp4?alt=media&token=5839fa50-a249-4670-81d7-a9c5cefe25c5",
            "6.4":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2Fanim_6.4.mp4?alt=media&token=a49f90ea-fa76-4fc3-aa8a-61b709d8c2eb",
            "6.5":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2F6.5.mp4?alt=media&token=8327ff59-3229-4dcc-b43b-cdc9df55d57b",
            "6.6":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations6.6.mp4?alt=media&token=757f1aeb-cfa9-4f77-bdaf-b80b4c9afacb",
            "7.1":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations7.1.mp4?alt=media&token=eb116aa8-3d70-4b6a-9bf2-6761a7a52e60",
            "7.2":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations7.2.mp4?alt=media&token=7ce2d39b-674c-4759-897d-9c7596a7dc43",
            "7.3":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations7.3.mp4?alt=media&token=530012ee-1ede-49ed-ac13-cf232a486a91",
            "8.1":"https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations8.1.mp4?alt=media&token=455e95a8-38d1-4c5e-845c-7af1228300e6",
            "8.2":""
        }
    }

    setVideo = (id) => {
        const {videos} = this.state
        this.props.setLink(videos[id])
    }

    render(){
        const {title="Animaciones CSS"} = this.props
        return(
            <Card 
                className="course-menu"
                title={title}>

                <Card.Grid style={separator}>Modulo 1 | ¿Qué son las animaciones CSS?</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("1.1")} style={gridStyle}>Historia de HTML5 </Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("1.2")} style={gridStyle}>Demo</Card.Grid>

                <Card.Grid style={separator}>Modulo 2 | Intro a HTML y CSS</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("2.1")} style={gridStyle}>Herramientas que ocuparemos</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("2.2")} style={gridStyle}>Codepen</Card.Grid>

                <Card.Grid style={separator}>Modulo 3 | Simple animations | transition</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("3.1")} style={gridStyle}>Usando transition shortcut</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("3.2")} style={gridStyle}>Transition properties</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("3.3")} style={gridStyle}>Cubic-bezier</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("3.4")} style={gridStyle}>Ejercicio: Reveal</Card.Grid>

                <Card.Grid style={separator}>Modulo 4 | Complex animations | keyframes</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.1")} style={gridStyle}>Declarando keyframes</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.2")} style={gridStyle}>aplicando una animacion a una clase</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.3")} style={gridStyle}>Creando una animación bounce</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.4")} style={gridStyle}>Creando una animación Reveal</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("4.5")} style={gridStyle}>Transform Property</Card.Grid>

                <Card.Grid style={separator}>Modulo 5 | 3D animations</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("5.1")} style={gridStyle}>Animación 3D</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("5.2")} style={gridStyle}>Completando la animación</Card.Grid>

                <Card.Grid style={separator}>OPCONAL 1 | jQuery Interaction</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.1")} style={gridStyle}>¿Qué es jQuery?</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.2")} style={gridStyle}>jQuery CDN</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.3")} style={gridStyle}>Agregando jQuery en codepen</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.4")} style={gridStyle}>Usando jQuery por primera vez</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.5")} style={gridStyle}>hasClass, removeClass, addClass</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("6.6")} style={gridStyle}>toggleClass</Card.Grid>

                <Card.Grid style={separator}>OPCONAL 2 | SVG animations</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("7.1")} style={gridStyle}>What SVG is</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("7.2")} style={gridStyle}>Drawing with svg</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("7.3")} style={gridStyle}>Animate the SVG drawing</Card.Grid>

                <Card.Grid style={separator}>Conclusiones</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("8.1")} style={gridStyle}>¿Donde aprender más?</Card.Grid>
                <Card.Grid onClick={()=>this.setVideo("8.2")} style={gridStyle}>¿Qué sigue?</Card.Grid>

                <Card.Grid style={separator}>EXAMEN</Card.Grid>
                <Card.Grid style={gridStyle}>Responder el examen</Card.Grid>

            </Card>
        )
    }
}

const gridStyle = {
    width: '100%',
    textAlign: 'center',
    cursor:"pointer"
  };

const separator = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width: '100%',
    height:20,
    background:"lightblue",
    textAlign: 'center',
  };

export default CourseMenu