'use client';

import { useEffect } from 'react';
import ErrorMessage from '../components/ErrorMessage';

type RootErrorPageProps = {
  error: Error;
  reset: () => void;
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <ErrorMessage
      pageTitle='Erro inesperado - Internal Server Error'
      contentTitle='Erro 501 😵‍💫'
      content='Erro 501 - Ocorreu um erro inesperado no servidor deste site'
    />
  );
}
