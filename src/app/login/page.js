'use client'
//imports
import Link from 'next/link';
import Button from '../components/Button'
import Card from '../components/Card'
import './login.css';
import image from '../../../public/images/artchive.png'
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import { useRouter } from 'next/navigation';
import LoginStyles from './login.module.css'

const Login = () => {
    const router = useRouter();
    const { userData, setUserData } = useContext(UserContext);

    // redirect if logged in
    useEffect(() => {
        if (userData.token) {
            router.push('/');
        }
    }, [userData.token, router]);

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // send login request to server
            console.log('we good so far')
            const response = await axios.post('http://localhost:8085/api/users/login', formData);
            console.log('we good here?')
            setUserData({
                token: response.data.token,
                user: response.data.user,
            });

            // store authentication token in local storage
            localStorage.setItem("auth-token", response.data.token);
            console.log('what about here?')
            console.log(response.data.token)
            //router.push('/');
        } catch (error) {
            console.error('Login failed: ', error);
        }   
    }

//export default function Login() {

    return (
        <div className={LoginStyles.page}>
            <div className='header'>
                <img src="/images/ARTCHIVE.png" alt='artchive logo' height='100' width='100' href='/signup'/>
                <Link href = '/' class='link'>Return to home page</Link>
            </div>
            <Card className={LoginStyles.input}>
                <h3>Log in to your account:</h3>
                <form onChange={handleChange} onSubmit={handleLogin} className={LoginStyles.form}>
                    <label>Username:</label>
                    <input
                        id='username'
                        type='text'
                    />
                    <label>Password:</label>
                    <input
                        id='password'
                        type='text'
                    />
                    <Button type='submit'>Log In</Button>
                </form>
                <Link href = '/signup' className='link'>Need to create an account? Sign up!</Link>
            </Card>
        </div>
    )
}
export default Login;