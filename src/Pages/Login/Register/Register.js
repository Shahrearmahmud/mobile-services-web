import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(name,email,password)

        createUserWithEmailAndPassword(email,password);

    }
    const navigateRegister = () => {
        navigate('/login');
    }

    if(user){
        navigate('/home')
    }
    return (
        <div className=' container mx-auto my-5 bg-white p-5 rounded '>
            <h2 >Please Register</h2>
            <Form onSubmit={handleRegister} className='text-white'>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='text-dark'>Name</Form.Label>
                    <Form.Control  ref={nameRef} type="name" placeholder="Enter name" required />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-dark'>Email address</Form.Label>
                    <Form.Control ref={emailRef}  type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-dark' >Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
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