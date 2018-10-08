import React, {Component} from 'react'
import  firebase  from 'firebase/app';

class Dashboard extends Component{

    state = {
        emails:[]
    }

    componentWillMount(){
        const db = firebase.firestore().collection('emails').get()
        .then(snap=>{
            const {emails} = this.state
            snap.forEach(doc=>{
                emails.push(doc.id)
            })
            this.setState({emails})
        })
    }

    render(){
        const {emails} = this.state
        return(
            <div>
                <h1>Emails:</h1>
            {emails.map((e,i)=>{
              return e + ', '
            })}
             </div>
        )
    }
}

export default Dashboard