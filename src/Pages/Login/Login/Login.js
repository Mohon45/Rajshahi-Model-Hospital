import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import './Login.css';

const Login = (props) => {
    const {email, setEmail, password, setPassword} = props;
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="login my-5">
            <h2>Please Login</h2>
            <div>
                <Form className="login-from mx-auto border my-5 pb-5">
                    <Form.Group className="my-3 mx-2" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="my-3 mx-2" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button className="btn-style">Submit</Button>
                </Form>
            </div>
            <div>
                
                <Button onClick={signInUsingGoogle}>
                <span>Sign In Google </span> <i class="fab fa-google"></i>
                </Button>
            </div>
        </div>
    );
};

export default Login;