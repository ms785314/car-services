import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Socials from '../Socials/Socials';
import { async } from '@firebase/util';
const Register = () => {
    const [agree, setAgre] = useState(false);
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const getName = useRef('');
    const getPass = useRef('');
    const getEmail = useRef('');

    const navigate = useNavigate();
    if(user){
        console.log(user);
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = getName.current.value;
        const email = getEmail.current.value;
        const pass = getPass.current.value;

        await createUserWithEmailAndPassword(email,pass);
        await updateProfile({ displayName:name });
        alert('Updated profile');
        console.log('update profile');
        navigate('/');
    }
    
    return (
        <div>
            <div className='container  pt-5'>
            <h1 className=' text-primary text-center'>Please Register</h1>
            <Form onSubmit={handleRegister} style={{width:'400px',margin:'auto',boxShadow:'0 0 5px rgba(0,0,0,.4)', padding:'20px 40px'}} >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={getName} placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={getEmail} type="email"  placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  ref={getPass} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=> setAgre(!agree)} type="checkbox" label="Accept Terms and condition" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center mt-2'>Have an account? <Link to='/login'>Please Login</Link></p>
        </div>
        <Socials></Socials>
        </div>
    );
};

export default Register;