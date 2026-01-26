import clsx from 'clsx';
import './header.css';

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
        <a href='#'>Vitor Blog</a>
      </h1>
    </header>
  );
}
