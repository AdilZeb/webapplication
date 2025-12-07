import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import '@/styles/globals.css';
import { AuthProvider } from '@/context/AuthContext';
import Head from 'next/head';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // Pages that don't need the global navbar
  const isAuthPage = ['/login', '/register'].includes(router.pathname);

  return (
    <>
      <Head>
        <title>CARDEX - Car Dealership Exchange</title>
        <meta name="description" content="Modern vehicle showroom management platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={inter.className}>
        <AuthProvider>
          {!isAuthPage && <Navbar />}
          <div className={!isAuthPage ? "pt-16" : ""}>
            <Component {...pageProps} />
          </div>
        </AuthProvider>
      </main>
    </>
  );
}
