import clsx from 'clsx';
import './not-found.css';

export default function NotFoundPage() {
  return (
    <div>
      <div
        className={clsx(
          'min-h-80 bg-slate-900 text-slate-100',
          'not-found rounded-xl',
          'flex items-center justify-center flex-col',
          'text-center',
        )}
      >
        <h1 className='text-7xl/tight mb-4 font-extrabold'>404</h1>
        <p>Erro 404 - A página não foi encontrada neste site</p>
      </div>
    </div>
  );
}
