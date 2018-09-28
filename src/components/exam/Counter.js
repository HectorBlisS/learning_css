import React, {Component} from 'react'

let interval

export default class Counter extends Component{

    state = {
        seconds:30,
        interval:null
    }

    componentWillMount(){
        this.begin()
    }

    begin = () => {
        // console.log(seconds)
        clearInterval(interval)
        interval = setInterval(this.rest, 1000)
        this.props.reset()
    }

    rest = () => {
        let {seconds} = this.props
        if(seconds < 1) {
            //do some
            this.props.action()
            //reset
            this.begin()
            return
        }
        this.props.rest()
    }

    render(){
        const {seconds} = this.props
        return(
            <div style={{margin:'0 auto', height:50, width:50, background:'lightblue', padding:10, borderRadius:'50%'}}>
                <h2 style={{color:'white'}}>
                    {seconds}
                </h2>
            </div>
        )
    }
}

// action, seconds, rest