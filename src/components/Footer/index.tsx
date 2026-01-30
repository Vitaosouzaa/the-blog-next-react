import Link from 'next/link';
import './footer.css';

export function Footer() {
  return (
    <footer className='text-2xl font-extrabold text-center footer'>
      <p>
        Copyright &copy; 2026 My blog. {new Date().getFullYear()} -{' '}
        <Link href='/'>The Personal Blog</Link>
      </p>
    </footer>
  );
}
