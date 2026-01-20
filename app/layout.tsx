import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vitor's Blog",
  description: "Descrição do meu blog pessoal",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Vitor Blog</h1>
        </header>
        {children}
        <footer>
          <p>© 2026 Vitor Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
