import React from 'react'
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../actions/productsActions';

function CreateScreen() {

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }
    }, [userInfo]);

    const [formData, setFormData] = useState({

        name: '',
        category: '',
        brand: '',
        price: '',
        stockcount: '',
        description: '',
    } );

    const formHandler = (e) => {

        const { id, value } = e.target
        setFormData(prevData => ({
          ...prevData,
          [id]: value
        }))


    }

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(createProduct(formData));
        
    }

  return (
    <>
        <Container>
            <Row className='justify-content-md-center mt-5'>
                <Col xs={12} md={6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Create Product</Card.Title>
                            <Form onSubmit={submitHandler}>
                                <Form.Group controlId='name' className='mt-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='name' placeholder='Enter name' value={formData.name} onChange={formHandler}/>
                                </Form.Group>

                                <Form.Group controlId='category' className='mt-3'>
                                    <Form.Label>category</Form.Label>
                                    <Form.Control type='name' placeholder='Enter Category' value={formData.category} onChange={formHandler}/>
                                </Form.Group>
                                
                                <Form.Group controlId='brand' className='mt-3'>
                                    <Form.Label>Brand</Form.Label>
                                    <Form.Control type='brand' placeholder='Enter brand' value={formData.brand} onChange={formHandler}/>
                                </Form.Group>
                                <Form.Group controlId='price' className='mt-3'>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type='price' placeholder='Enter price' value={formData.price} onChange={formHandler}/>
                                </Form.Group>
                                <Form.Group controlId='stockcount' className='mt-3'>
                                    <Form.Label>Stock Count</Form.Label>
                                    <Form.Control type='stockcount' placeholder='Enter stock count' value={formData.stockcount} onChange={formHandler}/>
                                </Form.Group>
                                <Form.Group controlId='description' className='mt-3'>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type='description' placeholder='Enter description' value={formData.description} onChange={formHandler}/>
                                </Form.Group>
                                {/* <Form.Group controlId='image' className='mt-3'>
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type='text' placeholder='Enter image' />
                                </Form.Group> */}
                                <Button variant='primary' type='submit' className='mt-3'>
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default CreateScreen
