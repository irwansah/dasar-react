import React from 'react'
import {Table} from 'react-bootstrap'
import { FaEdit,FaTimes } from 'react-icons/fa';

const TableDisplay = ({list_makanan,editData,deleteData}) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>No</th>
                <th>Nama Makanan</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
            
                {list_makanan.length > 0 ? list_makanan.map((makanan,index)=>{
                    return (
                        
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{makanan.nama}</td>
                        <td>{makanan.deskripsi}</td>
                        <td>{makanan.harga}</td>
                        <td>
                            <button className="m-2 btn btn-warning"  onClick={()=>editData(makanan.id)}><FaEdit/></button>
                            <button className="m-2 btn btn-danger" onClick={()=>deleteData(makanan.id)}><FaTimes/></button>

                        </td>
                        </tr>
                    )    
                
                }):"Tidak ada item, silahkan tambahkan data"}
               
                
            </tbody>
            </Table>
    )
}

export default TableDisplay
