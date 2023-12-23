import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="Portafolio de proyectos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  )
}
