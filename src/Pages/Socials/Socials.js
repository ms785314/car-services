import React from 'react';

const Socials = () => {
    return (
        <div>
            <div className='text-center d-flex justify-content-center align-items-center'>
                <div style={{height:'1px',width:'100px',background:'gray'}}></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px',width:'100px',background:'gray'}}></div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button className="btn-primary" style={{width:'240px',margin:'10px 0'}}>Continue With Google</button>
                <button className="btn-primary"style={{width:'240px',margin:'10px 0'}}>Continue With Facebook</button>
                <button className="btn-primary"style={{width:'240px',margin:'10px 0'}}>Continue With Github</button>
            </div>
        </div>
    );
};

export default Socials;