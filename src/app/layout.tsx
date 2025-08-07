
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Lora } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider'; 
import YouTubeBackgroundPlayer from '@/components/layout/YouTubeBackgroundPlayer';

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
          <YouTubeBackgroundPlayer />
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="py-6 text-center text-muted-foreground sticky bottom-0 z-10 bg-background/80 backdrop-blur">
             <iframe 
                style={{borderRadius: '12px', width: '100%', maxWidth: '500px', margin: '0 auto'}}
                src="https://open.spotify.com/embed/playlist/50ANs2wwsAkYp0qfWTNB1Q?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
              </iframe>
            <p className="mt-4">&copy; {new Date().getFullYear()} Myrella. Criado com amor <span className="text-xs text-primary/70">愛 (Ai)</span>.</p>
          </footer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
