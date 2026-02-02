import clsx from 'clsx';
import '../../app/not-found.css';
import React from 'react';

type ErrorMessageProps = {
  pageTitle: string;
  contentTitle: string;
  content: React.ReactNode;
};

export default function ErrorMessage({
  content,
  contentTitle,
  pageTitle,
}: ErrorMessageProps) {
  return (
    <>
      <title>{pageTitle}</title>
      <div>
        <div
          className={clsx(
            'min-h-80 bg-slate-900 text-slate-100',
            'rounded-xl',
            'not-found',
            'flex items-center justify-center flex-col',
            'text-center',
          )}
        >
          <h1 className='text-7xl/tight font-extrabold'>{contentTitle}</h1>
          <div>{content}</div>
        </div>
      </div>
    </>
  );
}
