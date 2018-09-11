import React, {Component} from 'react'
import CourseMenu from './CourseMenu'
import CourseVideo from './CourseVideo'


class CourseViewer extends Component{

    componentWillMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/')
        // this.setState({logged:true, user, respaldo:{...user}})
    }

    render(){
        return(
<section className="viewer" >
    
    <CourseMenu />

    <CourseVideo />

</section>
        )
    }
}

export default CourseViewer