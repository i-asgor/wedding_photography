import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {

    const navigate = useNavigate();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


      let customerror;
      if (error) {
        customerror = (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
        if(user){
            navigate('/');
        }

        console.log(email, password);
    }    
    



    return (
        <div className='container w-50 mx-auto py-3'>
            <h1 className='text-center'>Login</h1>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                {customerror}
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Wedding Photography? <Link to='/register' className='text-primary text-decoration-none' >Please Register</Link></p>
        </div>
    );
};

export default Login;