import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


const Service = ({ service }) => {
    const { name, img,  description } = service;
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
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;