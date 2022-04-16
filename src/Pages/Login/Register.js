import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const getName = useRef('');
    const getPass = useRef('');
    const getEmail = useRef('');

    const handleRegister = (event) => {
        event.preventDefault();
        const name = getName.current.value;
        const email = getEmail.current.value;
        const pass = getPass.current.value;

        createUserWithEmailAndPassword(email,pass);
    }
    if(user){
        console.log(user);
    }
    return (
        <div>
            
            <div className='container vh-100 pt-5'>
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
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button  variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p className='text-center mt-2'>Have an account? <Link to='/login'>Please Login</Link></p>
        </div>
        </div>
    );
};

export default Register;