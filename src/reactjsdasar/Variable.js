import React, { Component } from 'react'
// const harga=3000;
// harga=2; // error cant assignment;

var harga=3000;
if(true){
     harga=4000;
}

// let harga=3000;
// if(true){
//     let harga=4000;
// }
export default class Variable extends Component {
    render() {
        return (
            <div>
                <h1>Harga Buku : {harga}</h1>
            </div>
        )
    }
}
