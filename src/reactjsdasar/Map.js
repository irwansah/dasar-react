import React from 'react'

const cap=(s)=>{
    return s && s[0].toUpperCase() + s.slice(1);
}
const list_makanan=[
    {
        nama:'soto',
        harga:12000
    },
    {
        nama:'sate',
        harga:15000
    },
    {
        nama:'bakso',
        harga:17000
    },
    {
        nama:'bakmi',
        harga:14000
    },
    {
        nama:'bubur',
        harga:8500
    },
]
const total_bayar=list_makanan.reduce((total_harga,makanan)=>{
    return total_harga+makanan.harga;
},0);
const Map = () => {
    return (
        <div>
            <h3>Map</h3>
            <ul>
                {
                    list_makanan.map((makanan,index)=>(
                        <li>{index+1}. {cap(makanan.nama)} - Harga {makanan.harga}</li>
                    ))
                }
            </ul>
            <h3>Map Filter yang lebih dari 13 Ribu</h3>
            <ul>
                {
                    list_makanan.filter((makanan)=>makanan.harga>13000).map((makanan,index)=>(
                        <li>{index+1}. {cap(makanan.nama)} - Harga {makanan.harga}</li>
                    ))
                }
            </ul>
            <h3>Total Harga : {total_bayar}</h3>
          
        </div>
    )
}

export default Map
