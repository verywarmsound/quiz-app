
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Footer from "../components/Footer";

class MyDocument extends Document {
    render() {
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
                <Footer/>
                </body>

            </Html>
        );
    }
}

export default MyDocument;
