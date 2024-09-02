import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Button, Col, FormGroup, Input, Row } from 'reactstrap'

const initialUser= {username:"",email:"", password:""}
const Registration = () => {
    const [user, setUser] = useState(initialUser);
    const navigate = useNavigate();

    const signUp = async () => {
        const url = 'http://localhost:1337/api/auth/local/register'
        try {
          if (user.username && user.email && user.password){
            const res = await axios.post(url, user)
            if(res) {
                setUser(initialUser)
                navigate('/login')
            }
          }  
        } catch (error) {
            toast.error(error.message, {
                hideProgressBar: true,
            });
        }
    }

    const handleUserChange = ({target}) => {
        const {name , value} = target;
        setUser((currentUser) => ({
            ...currentUser,
            [name]: value,
        }));
    };
  return (
    <Row className='register'>
        <Col sm='12' md={{ size: 4, offset: 4}}>
    <div>
        <h2>Sign Up</h2>
        <FormGroup>
            <Input
            type="text"
            name="username"
            value={user.username}
            onChange={handleUserChange}
            placeholder='Enter your full name'
            />
        </FormGroup>
        <FormGroup>
            <Input
            type="email"
            name="email"
            value={user.email}
            onChange={handleUserChange}
            placeholder='Enter your Email'
            />
        </FormGroup>
        <FormGroup>
            <Input
            type="password"
            name="password"
            value={user.identifier}
            onChange={handleUserChange}
            placeholder='Enter the password'
            />
        </FormGroup>
        <Button color='primary' onClick={signUp}>SignUp</Button>
        <h6>
            Click <Link to='/login'>Here</Link> to Login
        </h6>
        
              </div>
        </Col>
    </Row>
  )
}

export default Registration