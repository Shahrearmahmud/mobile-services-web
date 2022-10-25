import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    // const nameRef = useRef('')
    // const emailRef = useRef('');
    // const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password =event.target.password.value;

    }
    const navigateRegister = event => {
        navigate('/login');
    }

    return (
        <div className=' container mx-auto my-5 bg-white p-5 rounded '>
            <h2 >Please Register</h2>
            <Form onSubmit={handleRegister} className='text-white'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>Name</Form.Label>
                    <Form.Control  type="text" placeholder="Enter name" required />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark' >Password</Form.Label>
                    <Form.Control  type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Register
                </Button>
            </Form>
            <p className='my-3 '>Already have an account ? <span className='hover' onClick={navigateRegister} hover >Login</span> </p>
        </div>
    );
};

export default Register;