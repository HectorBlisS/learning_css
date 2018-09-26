import React, {Component} from 'react'
import {Card, Switch} from 'antd'
import ActiveUser from './ActiveUser'
import  swal  from 'sweetalert';
import {sendEncourageEmail, courseDoneEmail} from '../../services/firebase'


class CourseVideo extends Component{

    state = {
        user:{},
        time:5,
        autoplay:true
    }

    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(user) this.setState({user})
        this.videoListener()
    }

    videoListener = () => {
        this.refs.vid.onended = ()=>{
            if(this.props.currentKey === "5.2"){
                // console.log("sending email")
                sendEncourageEmail(this.state.user.email, this.state.user.displayName)
            }
            if(this.props.currentKey === "8.2"){
                courseDoneEmail(this.state.user.email, this.state.user.displayName)
            }
            if(!this.state.autoplay) return
            const index = this.props.order.indexOf(this.props.currentKey) + 1
            let {time} = this.state
            swal({
                title:"¡Estas progresando!",
                text: `...El siguiente video se reproducirá en automaticamente`,
                button:false
            });
            let interval = setInterval(()=>{
                time--
                this.setState({time})
                if(time<1){
                    swal.close();
                    this.props.setLink(this.props.order[index])
                    clearInterval(interval)
                    this.setState({time:5})
                }
            },1000)
            
        }
    }

    toggleAutoplay = () => {
        this.setState({autoplay:!this.state.autoplay})
    }

    render(){
        const {title="Animaciones CSS", link} = this.props
        const {user, autoplay} = this.state
        return(
        <Card 
            className="course-video"
            extra={
            <div>
                <Switch  
                onChange={this.toggleAutoplay}
                checked={autoplay} /> <span style={{marginRight:50}}>Reproducción automática </span>
                
                  <ActiveUser user={user} />
            </div>
            }
            title={title}>
             <video  
                ref="vid"
                // onChange={this.onChange}
                controls
                controlsList="nodownload"
                autoPlay={autoplay}
                style={{width:"100%"}} 
                src={link}></video>
        </Card>
        )
    }
}

export default CourseVideo