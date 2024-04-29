'use client'
//imports
import Link from 'next/link';
import Card from '../components/Card'
import Button from '../components/Button'
import './signup.css'
import image from '../../../public/images/artchive.png'
import {useState, useContext } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext' 

const Signup = () => {
    const { setUserData } = useContext(UserContext);

    const [formData, setFormData] = useState ({
        username:'',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault();

        try {
            await axios.post('http://localhost:8085/api/users/signup', formData);
            const loginRes = await axios.post('http://localhost:8085/api/users/login', {
                username: formData.username,
                password: formData.password
            })
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            })
            localStorage.setItem('auth-token', loginRes.data.token)
            router.push('/')
        } catch(err) {
            console.error('Signup failed:', err)
            setError("Error: " + err.response.data.msg)
        }
    }

    return (
        <div class='bg'>
            <div class='header'>
                <img src="/images/ARTCHIVE.png" alt='artchive logo' height='100' width='100' href='/signup'/>
                <Link href = '/' class='link'>Return to home page</Link>
            </div>
            <Card class='input'>
                <h3>Create an account:</h3>
                <form onSubmit = {handleSubmit} onChange = {handleChange}>
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
                    <label>Confirm Password:</label>
                    <input 
                        id='confirmPassword'
                        type='text'
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>
                <Link href = '/login' class='link'>Already have an account? Log in!</Link>
                <h4 className='error'>{error}</h4>
            </Card>
        </div>
    )
}
export default Signup;