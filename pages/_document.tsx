
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
            <Html lang="en">
                <Head>
                    <link rel="manifest" href="/manifest.json"/>
                    <link rel="apple-touch-icon" href="/icons/quiz-128x128.png"/>
                    <meta name="theme-color" content="#2196f3"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
