import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Service = ({ service }) => {
    const { id,name, img,  description } = service;
    const navigate = useNavigate();
    const go = (id) =>{
        navigate(`service/${id}`);
    }
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }} className='mt-5'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Button variant="primary" onClick={()=> go(id)}>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;