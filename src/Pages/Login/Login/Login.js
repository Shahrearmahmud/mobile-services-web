import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

    }
    const navigateRegister = event => {
            navigate('/register');
    }
    return (
        <div className=' container mx-auto my-5 bg-white p-5 rounded '>
            <h2 >Please Login</h2>
            <Form onSubmit={handleSubmit} className='text-white'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-dark'>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label  className='text-dark' >Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
    <p className='my-3 '>New to EasyTech ? <span  className='hover' onClick={navigateRegister} hover >Please Register</span> </p>
        </div>
    );
};

export default Login;