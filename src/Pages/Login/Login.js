import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Socials from '../Socials/Socials';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passRef = useRef('');
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const handleSubmit = event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        // console.log(email,pass);
        signInWithEmailAndPassword(email,pass)
    }
    if(user){
        navigate(from, { replace: true });
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPass = async () => {
        console.log('reseting');
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
        toast('email sent')
    }
    return (
        <div className='container vh-100 pt-5'>
            <h1 className=' text-primary text-center'>Please Login</h1>
            <Form onSubmit={handleSubmit} style={{width:'400px',margin:'auto',boxShadow:'0 0 5px rgba(0,0,0,.4)', padding:'20px 40px'}} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <p>Forget Password?  <span onClick={() =>resetPass()} className='text-primary cursor-pointer underline'>Reset password.</span></p>
                {loading && <p className='text-center'>Please wait...</p>}
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <p className='text-center mt-2'>New here? <Link to='/register'>Please Register</Link></p>

        <Socials></Socials>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;