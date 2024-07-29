import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps<{}>) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js').then(
                    (registration) => {
                        console.log('Service Worker registered with scope:', registration.scope);
                    },
                    (error) => {
                        console.log('Service Worker registration failed:', error);
                    }
                );
            });
        }
    }, []);


    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>

    );
}

export default MyApp;


