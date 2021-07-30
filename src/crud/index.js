import React, { Component } from 'react'
import FormInput from './FormInput'
import NavbarComponent from './NavbarComponent'
import TableDisplay from './TableDisplay'

export default class Crud extends Component {
    constructor(props) {
        super(props)
        const data=[
            {
                id:1,
                nama:"Ayam",
                deskripsi:"Makanan",
                harga:12000
            },
            {
                id:2,
                nama:"Bakso",
                deskripsi:"Makanan",
                harga:11000
            }
        ]
        this.state = {
             list_makanan:[...data],
             nama:"",
             deskripsi:"",
             harga:0,
             id:"",
             show:false

        }

    }

    handleModalShow=()=>{
        this.setState({
            show:true
        })
        this.handleClear()
    }
    handleModalClose=()=>{
        this.setState({
            show:false
        });
    }
    
    handleClear=()=>{
        this.setState({
            nama:"",
            deskripsi:"",
            harga:0,
            id:""
       })
    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        if(this.state.id===""){
            this.setState({
                list_makanan:[
                    ...this.state.list_makanan,{
                        id:this.state.list_makanan.length+1,
                        nama:this.state.nama,
                        deskripsi:this.state.deskripsi,
                        harga:this.state.harga
                    }
                ]
            })
        }else{
            const set_makanan=this.state.list_makanan
            .filter((makanan)=>makanan.id!==this.state.id)
            .map((filterMakanan)=>{
                return filterMakanan
            })

            this.setState({
                list_makanan:[
                    ...set_makanan,{
                        id:this.state.list_makanan.length+1,
                        nama:this.state.nama,
                        deskripsi:this.state.deskripsi,
                        harga:this.state.harga
                    }
                ]
            })
        }
        this.setState({
            nama:"",
            deskripsi:"",
            harga:0,
            id:""
       })
        

        

    }


    editData=(id)=>{
        const set_makanan=this.state.list_makanan
        .filter((makanan)=>makanan.id===id)
        .map((filterMakanan)=>{
            return filterMakanan
        })
        this.setState({
            nama:set_makanan[0].nama,
            deskripsi:set_makanan[0].deskripsi,
            harga:set_makanan[0].harga,
            id:set_makanan[0].id,
            show:true
       })
       
       
       
    
    
    }

    deleteData=(id)=>{
        const set_makanan=this.state.list_makanan
        .filter((makanan)=>makanan.id!==id)
        .map((filtermakanan)=>{
            return filtermakanan
        })
        this.setState({
            list_makanan:set_makanan
        })
    }
    
    render() {
        
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-3">
                    <TableDisplay list_makanan={this.state.list_makanan} editData={this.editData} deleteData={this.deleteData} />
                    <FormInput  {...this.state} handleModalShow={this.handleModalShow} handleModalClose={this.handleModalClose} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>

                </div>
            </div>
        )
    }
}
