import React, { Component } from 'react'
import Operand from './Operand';

export default class StateProps extends Component {
    constructor(props){
        super(props);
        this.state={
            makanan:'Bakso'
        }
    }
    gantiMakanan=(makanan_baru)=>{
        return this.setState({makanan:makanan_baru});
    }
    render() {
        return (
            <div>
                <h1>{this.state.makanan}</h1>
                <button onClick={()=>this.gantiMakanan("Soto")}>Ganti Makanan</button>
                <Operand makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
