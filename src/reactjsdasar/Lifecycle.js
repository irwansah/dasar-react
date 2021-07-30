import React, { Component } from 'react'
import SubLifecycle from './SubLifecycle'

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             makanan:"Bakso",
             data:{},
             tampil:false
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            this.setState({
                data:json
            })
        })
    }
    ubahMakanan(value){
        this.setState({
            makanan:value
        })
    }
    
    render() {
        return (
            <div>
                <h2>{this.state.makanan}</h2>
                <p>{this.state.data.title}</p>

                {this.state.tampil && <SubLifecycle ubahMakanan={(value)=>this.ubahMakanan(value)}/>}
                <button onClick={()=>this.setState({tampil:!this.state.tampil}) }>GO</button>
            </div>
        )
    }
}
