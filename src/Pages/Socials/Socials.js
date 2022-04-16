import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Socials = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorText;
    if (error || error1) {
        errorText = error.message;
        console.log(errorText);
    }
    if(user || user1){
        navigate('/');
    }
    return (
        <div>
            {
                errorText && <p className='text-center text-danger'>{errorText}</p>
            }
            <div className='text-center d-flex justify-content-center align-items-center'>
                <div style={{height:'1px',width:'100px',background:'gray'}}></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px',width:'100px',background:'gray'}}></div>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <button className="btn-primary" style={{width:'240px',margin:'10px 0'}} onClick={() => signInWithGoogle()}>Continue With Google</button>
                <button className="btn-primary"style={{width:'240px',margin:'10px 0'}}>Continue With Facebook</button>
                <button className="btn-primary"style={{width:'240px',margin:'10px 0'}} onClick={()=> signInWithGithub()}>Continue With Github</button>
            </div>
        </div>
    );
};

export default Socials;