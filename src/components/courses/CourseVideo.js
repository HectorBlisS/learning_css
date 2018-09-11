import React, {Component} from 'react'
import {Card} from 'antd'
import ActiveUser from './ActiveUser'

const pic = "https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2Fmodule1%2FAnimaciones3.1.mp4?alt=media&token=2ef60c65-f2c3-4d6d-ab88-5e769c5ababb"

class CourseVideo extends Component{

    state = {
        user:{}
    }

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) this.setState({user})
        this.videoListener()
    }

    videoListener = () => {
        this.refs.vid.onended = function(){
            alert("Terminó")
        }
    }

    render(){
        const {title="Introducción", link=pic} = this.props
        const {user} = this.state
        return(
        <Card 
            className="course-video"
            extra={<ActiveUser user={user} />}
            title={title}>
             <video  
                ref="vid"
                // onChange={this.onChange}
                controls
                controlsList="nodownload"
                autoPlay 
                style={{width:"100%"}} 
                src={link}></video>
        </Card>
        )
    }
}

export default CourseVideo