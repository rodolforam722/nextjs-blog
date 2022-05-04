import Head from "next/head";

export default function fofo() {
  return (
    <div className="container">
      <Head>
        <title>fofo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>hola</h1>
        <a href="/home">ir a home</a>
      </div>
    </div>
  );
}
