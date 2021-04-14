import Head from "next/head";
import Footer from "../container/footer/footer";
import Navbar from "../container/navbar/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </Head>
      <Navbar page="landing_page" />
      <Footer />
    </>
  );
}
