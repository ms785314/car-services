// import { Button } from 'bootstrap';
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expart = ({expart}) => {
    const {name,img} = expart;
    return (
        <div>
            <Col>
                <Card style={{ width: '18rem' }} className='mt-5'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Button variant="primary">Profile</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Expart;