import Head from "next/head";

import Link from "next/link";

export default function Home() {
  const pages = ["home", "test"];

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="container"
        style={{ padding: "3rem", display: "flex", gap: "2rem", color: "blue" }}
      >
        {pages.map((page) => (
          <Link href={`/${page}`} key={page}>
            {page}
          </Link>
        ))}
      </div>
    </div>
  );
}
