import Link from 'next/link';
import './home.css'

export default function Home() {
  return (
    <div class='back'><h1>This is Dummy Text. Go to one of the appropriate pages.</h1>
      <Link href = '/login'>Login page</Link>
      <Link href = '/signup'>Signup page</Link>
    </div>
  );
}