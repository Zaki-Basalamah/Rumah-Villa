import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Head>
        <title>Rumah2.5Lt.Villa</title>
      </Head>
      <nav>
        <Link href="/">/home</Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
