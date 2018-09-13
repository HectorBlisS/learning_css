import React, {Component} from 'react'
import {Card} from 'antd'
import ActiveUser from './ActiveUser'


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
        const {title="Animaciones CSS", link} = this.props
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