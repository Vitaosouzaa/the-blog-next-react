import ErrorMessage from '../components/ErrorMessage';

export default function NotFoundPage() {
  return (
    <ErrorMessage
      pageTitle='Página não encontrada'
      contentTitle='404 😢'
      content='Erro 404 - A página não foi encontrada neste site'
    />
  );
}
