import React, {Component} from 'react'
import CourseCard from './CourseCard';
import {Card} from 'antd'



class Enrolled extends Component{
    render(){
        const {user={}} = this.props
        return(
        <section className="enrolled">
                {/* <h2>Aprende los fundamentos de Diseño Web:</h2> */}
            
                {user.validated ? 
                <div className="list">
                    <CourseCard/>
                    {/* <CourseCard/> */}
                </div>
                :
                    <div>
                        <Card >
                            <h2>
                                ¡Aún no haz validado tus datos!
                            </h2>
                            <h4 style={{color:"red"}}>
                                Valida tus datos, posteriormente revisa tu correo y da clic en el enlace.
                                <br/>
                                entonces el curso aparecerá aquí.  =D
                            </h4>
                        </Card>
                    </div>
                    
                }
     
        </section>
        )
    }
}

export default Enrolled