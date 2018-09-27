import React, {Component} from 'react'
import {Radio, Button} from 'antd'
import swal from 'sweetalert'
import {updateUser} from '../../services/firebase'

export default class ExamPage extends Component{

    state = {
        points:0,
        user:null,
        current:null,
        order:["one","two"],
        questions:{
            "one":{
                id:"one",
                question: "¿Qué es HTML5 ?",
                options:{
                    0:{
                        answere: "Un framework",
                        id: 0
                    },
                    1:{
                        answere: "Internet",
                        id:1
                    },
                    2:{
                        answere: "Un lenguaje de programación",
                        id:2
                    },
                    3:{
                        answere: "Un lenjuague de maquetado",
                        id:3
                    }
                },
                correct: 3,
                answered: false,
                selected:null
            },
            "two":{
                id:"two",
                question: "¿Cual es la etiqueta que se usa para insertar una hoja de estilos en un archivo HTML?",
                options:{
                    0:{
                        answere: "<link/>",
                        id: 0
                    },
                    1:{
                        answere: "<meta/>",
                        id:1
                    },
                    2:{
                        answere: "<head></head>",
                        id:2
                    },
                    3:{
                        answere: "<script></script>",
                        id:3
                    }
                },
                correct: 0,
                answered: false,
                selected:null
            }
        },
    }

    componentWillMount(){
        //vlidate the user can aswere |||||||||||||||||||||||

        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/')
        if(user.approved){
            swal("Tu ya haz aprovado este examen =D", "No necesitas hacerlo de nuevo", "success")
            setTimeout(()=>this.props.history.push('/profile'), 1000)
        }
        this.setState({user})
        this.downloadExam()
    }

    downloadExam = () => {
        //const id = this.props.match.params.courseId
        const {order} = this.state
        const prom = this.state.points / this.state.order.length
        const title = prom > 70 ? "¡LO LOGRASTE!" : "ESTUVISTE MUY CERCA"
        const win = prom > 70 ? "PASASTE" : "PERO DEBES INTENTAR NUEVAMENTE"
        const success = prom > 70 ? "success" : "error"
        if(!order.length){
            swal(title, win, success)
            if(!(prom > 70)) {
                return this.props.history.push('/course/0/animaciones-css')
            } 
            const {user} = this.state
            user.approved = true
            updateUser(user)
            setTimeout(()=>this.props.history.push('/profile'),1000)
            return
        }
        const current = this.state.questions[order[0]]
        const keys = this.doShuffle(Object.keys(current.options))
        current.keys = keys
        this.setState({current})
    }

    doShuffle = (array) => {
        let questions
        if(!array){
             questions = this.state.exam.order
        }else{
            questions = array
        }
        let random = 0
        let aux
        for(let q of questions){
            random = Math.floor(Math.random() * questions.length) 
            aux = questions[random]
            questions[random] =  questions[0]
            questions[0] = aux
        }
        return questions
    }

    changeQuestion = () => {
        
    }

    selected = (e) => {
        console.log(e.target.value)
        const answereId = e.target.value
        const {current} = this.state
        const {questions} = this.state
        current.selected = answereId
        questions[current.id] = current
        
        this.setState({current, questions})

    }

    doAnswere = () => {
        let {current, points, questions, order} = this.state
        if(current.selected === current.correct) points+=10
        console.log(points)
        questions[current.id] = current
        order.splice(order.indexOf(current.id), 1)
        this.setState({questions, current, points, order}, ()=>this.downloadExam())
        
    }

    render(){
        const {current} = this.state
        const {keys} = current
        return(
            <div>

            {/* make this a component */}
            <h2>{current.question}</h2>
            <Radio.Group buttonStyle="solid" onChange={this.selected} >

                {keys.map((key, i)=>{
                   return <Radio.Button 
                            style={{display:'block'}} 
                            key={i} 
                            value={current.options[key].id}
                        >
                         {current.options[key].answere}
                    </Radio.Button>
               
                })}

             </Radio.Group> 

             <Button onClick={this.doAnswere} >Siguiente</Button>

            </div>
        )
    }
}