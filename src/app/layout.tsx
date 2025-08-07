
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider'; 

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const lora = Lora({
  variable: '--font-lora',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Myrella',
  description: 'Um lugar especial para a nossa história de amor.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const videoId = 'p9_ouiTytmI';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=1`;

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="py-6 px-4 text-center text-muted-foreground sticky bottom-0 z-10 bg-background/90 backdrop-blur">
            <div className="mb-4">
              <iframe 
                width="100%" 
                height="80" 
                src={embedUrl}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                style={{ borderRadius: '12px', maxWidth: '400px', margin: '0 auto' }}
              ></iframe>
            </div>
            <p className="mt-4">&copy; {new Date().getFullYear()} Myrella. Criado com amor <span className="text-xs text-primary/70">愛 (Ai)</span>.</p>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
