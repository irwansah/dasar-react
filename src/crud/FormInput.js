import React from 'react'
import { Col, Row, Form, Button, Modal } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa';
const FormInput = ({show,id,nama,deskripsi,harga,handleChange,handleSubmit,handleModalShow,handleModalClose}) => {

  
    const flyButton = {
        position:"Absolute",
        bottom:"20px",
        right:"50px",
        borderRadius:"100%",
        width:"60px",
        height:"60px",
        textAlign:"center"
      }

      const bigIcon={
        fontSize:"20pt"
      }

    

    
    return (

        <div className="mt-3">

            <Button variant="success" className="float-end mb-2" style={flyButton} onClick={handleModalShow}>
                <FaPlus style={bigIcon}/>
            </Button>
            <h4>Data Makanan</h4>

            <Modal show={show} onHide={handleModalClose} >
                <Modal.Header closeButton>
                    <Modal.Title>Form {id? "Edit":"Tambah"} Makanan</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>

                <Modal.Body>
                    <Row>
                        <Col>
                                <Form.Group className="mb-3" controlId="namaId">
                                    <Form.Label>Nama Makanan</Form.Label>
                                    <Form.Control type="text" placeholder="Masukan nama makanan" name="nama" value={nama} onChange={(event)=>handleChange(event)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="deskId">
                                    <Form.Label>Deskripsi</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Deskripsi Makanan" name="deskripsi" value={deskripsi} onChange={(event)=>handleChange(event)} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="hargaId" >
                                    <Form.Label>Harga</Form.Label>
                                    <Form.Control type="number" placeholder="Harga" name="harga" value={harga} onChange={(event)=>handleChange(event)} />
                                </Form.Group>
                                
                                
                        </Col>
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" className="float-end" type="submit" onClick={handleModalClose}>
                                    Submit
                                </Button>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Batal
                    </Button>

                </Modal.Footer>
                </Form>

            </Modal>

        </div>
    )
}

export default FormInput
