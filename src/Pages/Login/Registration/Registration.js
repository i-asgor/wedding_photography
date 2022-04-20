import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Registration = () => {

    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      let customerror;
      if (error) {
        customerror = (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }

      const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email,password)
        if(user){            
            navigate('/');
        }
        // console.log(name, email, password)
      }


    return (
        <div className='container w-50 mx-auto py-3'>
            <h1 className='text-center'>Registration</h1>
            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {customerror}
                <Button variant="primary" type="submit">
                    Registration
                </Button>
            </Form>
            <p>Are you already an Account? <Link to='/login' className='text-primary text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Registration;