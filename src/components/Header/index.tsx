import clsx from 'clsx';
import './header.css';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          'text-4xl/normal font-extrabold',
          'sm:text-5xl',
          'md:text-6xl',
          'lg:text-7xl',
          'xl:text-8xl',
          'text-blue-500',
          'header',
        )}
      >
        <Link href='/'>Vitor Blog</Link>
      </h1>
    </header>
  );
}
