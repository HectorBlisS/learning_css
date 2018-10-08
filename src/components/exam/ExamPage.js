import React, {Component} from 'react'
import {Radio, Button, Progress} from 'antd'
import swal from 'sweetalert'
import {updateUser, examApproved, examNotApproved} from '../../services/firebase'
import questions from '../../exams/animations'
import Counter from './Counter';

export default class ExamPage extends Component{

    state = {
        seconds:30,
        points:0,
        user:null,
        current:null,
        order:["one","two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"],
        questions
    }

    rest = () => {
        let {seconds} = this.state
        seconds--
        this.setState({seconds})
    }

    reset = () => {
        this.setState({seconds:30})
    }

    componentWillMount(){
        // console.log(this.state.questions)
        //vlidate the user can aswere |||||||||||||||||||||||

        const user = JSON.parse(localStorage.getItem('user'))
        if(!user) return this.props.history.push('/')
        if(user.approved){
            swal("Tu ya haz aprobado este examen =D", "No necesitas hacerlo de nuevo", "success")
            setTimeout(()=>this.props.history.push('/profile'), 1000)
        }
        this.setState({user})
        this.downloadExam()
    }

    downloadExam = () => {
        //const id = this.props.match.params.courseId
        const {order} = this.state
        // const prom = this.state.points / this.state.order.length
        const prom = this.state.points
        const title = prom > 70 ? "¡LO LOGRASTE!" : "ESTUVISTE MUY CERCA"
        const win = prom > 70 ? "PASASTE" : "PERO DEBES INTENTAR NUEVAMENTE"
        const success = prom > 70 ? "success" : "error"
        const {user} = this.state
        if(!order.length){
            swal(title, win, success)
            if(!(prom > 70)) {
                //not approved
                examNotApproved(user.uid)
                user.points = this.state.points
                updateUser(user)
                return this.props.history.push('/course/0/animaciones-css')
            } 
            user.approved = true
            user.points = this.state.points
            //addToSheet
            examApproved(user.uid)
            //
            updateUser(user)
            setTimeout(()=>this.props.history.push('/profile'),1000)
            return
        }
        const current = this.state.questions[order[0]]
        const keys = this.doShuffle(Object.keys(current.options))
        current.keys = keys
        this.setState({current})
        this.reset()
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
            console.log(q)
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
        // console.log(e.target.value)
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
        // console.log(points)
        questions[current.id] = current
        order.splice(order.indexOf(current.id), 1)
        this.setState({questions, current, points, order}, ()=>this.downloadExam())
        
    }

    render(){
        const {current, order} = this.state
        const {keys} = current
        return(
            <div style={{marginTop:50, height:'100vh',display:'flex', justifyContent:'center'}}>

<div style={{textAlign:'center'}}>
                <Counter reset={this.reset} rest={this.rest} seconds={this.state.seconds} action={this.doAnswere} />

                <br/>
                <br/>
                <Progress style={{width:350}} percent={100 - order.length * 10} status="active" />

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
<br/>
             <Button type="primary" style={{position:'absolute', right:200,top:300}} onClick={this.doAnswere} >Siguiente</Button>


</div>
            </div>
        )
    }
}