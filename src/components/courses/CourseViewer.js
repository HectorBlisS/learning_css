import React, {Component} from 'react'
import CourseMenu from './CourseMenu'
import CourseVideo from './CourseVideo'

const pic = "https://firebasestorage.googleapis.com/v0/b/cursosonline-4b11c.appspot.com/o/courses%2Fanimations-css%2FAnimations1.1.mp4?alt=media&token=f3dcea55-34e3-4913-84b6-26fc574e64d4"


class CourseViewer extends Component{

    state = {
        link:pic
    }

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/')
        // this.setState({logged:true, user, respaldo:{...user}})
    }

    setLink = (link) => {
        this.setState({link})
    }

    render(){
        const {link} = this.state
        return(
<section className="viewer" >
    
    <CourseMenu
        setLink={this.setLink}
    />

    <CourseVideo 
        link={link} 
    />

</section>
        )
    }
}

export default CourseViewer