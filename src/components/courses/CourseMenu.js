import React, {Component} from 'react'
import {Card} from 'antd'


class CourseMenu extends Component{
    render(){
        const {title="Animaciones CSS"} = this.props
        return(
            <Card 
                className="course-menu"
                title={title}>

                <Card.Grid style={separator}>Modulo 1</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={separator}>Modulo 2</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={separator}>Modulo 3</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={separator}>Modulo 4</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>

            </Card>
        )
    }
}

const gridStyle = {
    width: '100%',
    textAlign: 'center',
  };

const separator = {
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    width: '100%',
    height:20,
    background:"lightblue",
    textAlign: 'center',
  };

export default CourseMenu