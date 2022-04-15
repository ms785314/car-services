import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    // console.log(date);
    return (
        <div className='py-5 bg-dark text-white'>
            <h2>All Rights Reserved @{year}</h2>
        </div>
    );
};

export default Footer;