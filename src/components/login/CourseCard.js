import React from 'react'
import {Card, Avatar} from 'antd'
import {Link} from 'react-router-dom'

// const vid = "https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2Fmodule1%2FAnimaciones3.1.mp4?alt=media&token=2ef60c65-f2c3-4d6d-ab88-5e769c5ababb"

const img = "http://cssdude.com/wp-content/uploads/2016/07/css3animation.jpg"

const CourseCard = ({id=0,slug="animaciones-css",title="Animaciones CSS"}) => {
    return(
        <div style={{flex:1}} >
            <Link to={`/course/${id}/${slug}`}>
                <Card 
                    cover={<img src={img} alt="css" />}
                    hoverable
                    style={{
                        cursor:"pointer",
                        marginLeft:20
                        }}
                    title={title}
                >
                <div>
                <strong>
                    Aprende a crear animaciones CSS 2D, 3D y SVG. Diseña tus proyectos con atractivos efectos espectaculares
                    que deleiten a tus usuarios y te separen de los diseñadores web promedio.
                    Este curso tiene un modulo opcional en el que aprenderás a utilizar JavaScript con jQuery
                    para activar y desactivar clases y estilos css y aplicar animaciones con interactividad.
                </strong>
                </div>

                <p style={{textAlign:"center", marginTop:50, width:200}}>
                    <Avatar src="https://miro.medium.com/fit/c/240/240/0*jp3IFb08Sy3_k3N_." />
                    <span style={{marginLeft:20}} >By: Héctor BlisS</span>
                </p>
                {/* <video width="100" src={vid}></video> */}
                
                

                </Card>
                
            </Link>
        </div>
    )
}

export default CourseCard