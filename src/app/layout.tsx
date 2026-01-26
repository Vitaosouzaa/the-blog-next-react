import type { Metadata } from 'next';
import { ThemeProvider } from '../components/ThemeProvider';

import './globals.css';

export const metadata: Metadata = {
  title: "Vitor's Blog",
  description: 'Descrição do meu blog pessoal',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
