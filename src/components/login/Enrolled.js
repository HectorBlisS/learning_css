import React, {Component} from 'react'
import CourseCard from './CourseCard';
import {Card} from 'antd'



class Enrolled extends Component{
    render(){
        const {user={}} = this.props
        return(
        <section className="enrolled">
                <h2>Tus cursos:</h2>
            
                {user.validated ? 
                <div className="list">
                    <CourseCard/>
                    <CourseCard/>
                </div>
                :
                    <div>
                        <Card >
                            <h2>
                                ¡Aún no haz validado tus datos!
                            </h2>
                            <h4 style={{color:"red"}}>
                                Valida tus datos y comienza el curso =D
                            </h4>
                        </Card>
                    </div>
                    
                }
     
        </section>
        )
    }
}

export default Enrolled