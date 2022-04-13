import React from 'react';

const Service = ({service}) => {
    const {name} = service;
    return (
        <div>
            <h1>Name :{name}</h1>
        </div>
    );
};

export default Service;