import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>hola</h1>
        <a href="/fofo">ir a fofo</a>
      </div>
    </div>
  );
}
