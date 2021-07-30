import React, { Component } from 'react'

export default class SubLifecycle extends Component {
    componentDidMount(){
        alert('ini did mount/event ketika component di panggil');
    }
    componentWillUnmount(){
        alert("ini will unmount / event ketika component di hapus")
        this.props.ubahMakanan("Sate")
    }
    render() {
        return (
            <div>
                <h2>Component Sub Lifecycle</h2>
            </div>
        )
    }
}
