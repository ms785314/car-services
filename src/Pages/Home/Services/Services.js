import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json').then(res => res.json()).then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='container'>
            <h1 className='mt-5 text-primary'>Our Services: {services.length}</h1>
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
