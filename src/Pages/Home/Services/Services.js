import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json').then(res => res.json()).then(data => setServices(data));
    }, [])
    return (
        <div className='container'>
            <h1>Services: {services.length}</h1>
            {

                < Row xs={1} md={3} className="g-4 align-items-center">
                            {
                                services.map(service => {
                                    
                                    return <Service key={service.id} service={service}></Service>
                                })
                            }
                </Row>
            }
        </div >
    );
}; 

export default Services;

/*
<Row xs={1} md={2} className="g-4">
  {Array.from({ length: 4 }).map((_, idx) => (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
*/