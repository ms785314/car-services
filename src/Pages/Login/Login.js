import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');

    const handleSubmit = event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email,pass);
    }
    return (
        <div className='container vh-100 pt-5'>
            <h1 className=' text-primary'>Please Login</h1>
            <Form onSubmit={handleSubmit} style={{width:'300px',margin:'auto'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Login;