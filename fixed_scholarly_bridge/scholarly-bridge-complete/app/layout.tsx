import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Scholarly Bridge - Global Scholar Platform',
  description: 'Transforming Academic Conferences into Global Knowledge Ecosystems',
  keywords: ['academic', 'conferences', 'research', 'education', 'global'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
