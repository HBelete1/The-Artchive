//imports
import Link from 'next/link';
import Card from '../components/Card'
import Button from '../components/Button'
import './signup.css'

export default function Signup() {
    return (
        <div class='bg'>
            <div class='header'>
                {/* this is where an image link would go like in page.js but I cannot get it to work */}
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