import React from 'react'
import {Card} from 'antd'
import {Link} from 'react-router-dom'

const vid = "https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2Fmodule1%2FAnimaciones3.1.mp4?alt=media&token=2ef60c65-f2c3-4d6d-ab88-5e769c5ababb"

const CourseCard = ({id=0,slug="animaciones-css",title="Animaciones CSS"}) => {
    return(
        <div style={{flex:1}} >
            <Link to={`/course/${id}/${slug}`}>
                <Card 
                    style={{cursor:"pointer", marginLeft:20}}
                    title={title}
                >
                <video width="100" src={vid}></video>
                </Card>
                
            </Link>
        </div>
    )
}

export default CourseCard