import React, { Component } from 'react'

export default class Operand extends Component {
    render() {
        const {makanan,gantiMakanan}=this.props;
        return (
            
            <div>
                <h1>Ini Props : {makanan}</h1>
                <button onClick={()=>gantiMakanan("Sate")}>Ganti</button>
                <button onClick={()=>gantiMakanan("Bakso")}>Reset</button>
            </div>
        )
    }
}
