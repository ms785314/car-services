import React from 'react';
import {  Navigate, useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const navigate = useNavigate()
    const {serviceId} = useParams();
    const go =()=>{
        navigate('/checkout')
    }
    return (
        <div className='text-center p-5'>
            <h1>Service Details:{serviceId} </h1>
            <button className='text-center  btn btn-primary' onClick={()=>go()}>Check Out</button>
        </div>
    );
};

export default ServiceDetails;