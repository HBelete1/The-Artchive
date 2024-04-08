//imports
import Link from 'next/link';
import Button from '../components/Button'
import Card from '../components/Card'
import './login.css';
import image from './artchive.png'

export default function Login() {
    return (
        <div class='bg'>
            <div class='header'>
                <img src={image} alt='artchive logo' height='100' width='100'/>
            </div>
            <Card class='input'>
                <h3>Log in to your account:</h3>
                <form >
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
                <Link href = '/signup' class='link'>Need to create an account? Sign up!</Link>
            </Card>
        </div>
    )
}