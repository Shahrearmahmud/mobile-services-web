import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const checkedRef = useRef('');
    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async(event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const checked = checkedRef.current.checked;
        
           await createUserWithEmailAndPassword(email,password,checked);
           await updateProfile({ displayName: name });
          console.log('Updated profile');
          navigate('/home');
        

       

    }
    const navigateRegister = () => {
        navigate('/login');
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
                    <Form.Check ref={checkedRef} className='text-dark' type="checkbox" label="Accept EasyTech Terms and conditions" required />
                </Form.Group>
                <Button variant="dark w-50 mx-auto d-block mb-2" type="submit">
                    Register
                </Button>
            </Form>
            <p className='my-3 '>Already have an account ? <span className='hover' onClick={navigateRegister} hover >Login</span> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;