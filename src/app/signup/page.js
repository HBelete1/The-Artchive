//imports
import Link from 'next/link';
import Card from '../components/Card'
import Button from '../components/Button'
import './signup.css'
import image from '../../../public/images/artchive.png'

export default function Signup() {
    return (
        <div class='bg'>
            <div class='header'>
                <img src="/images/ARTCHIVE.png" alt='artchive logo' height='100' width='100' href='/signup'/>
                <Link href = '/' class='link'>Return to home page</Link>
            </div>
            <Card class='input'>
                <h3>Create an account:</h3>
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
                    <label>Confirm Password:</label>
                    <input 
                        id='confpassword'
                        type='text'
                    />
                    <Button type='submit'>Sign Up</Button>
                </form>
                <Link href = '/login' class='link'>Already have an account? Log in!</Link>
            </Card>
        </div>
    )
}