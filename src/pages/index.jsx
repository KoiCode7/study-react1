import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "src/styles/Home.module.css";
import { Grid } from "src/components/Grid";
import { Logo } from "src/components/Logo";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";
import { useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    e.preventDefault();
    console.log(e.target.href);
    alert(foo);
  }, []);

  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <main className={styles.main}>
        <Headline title="index ">
          <code className={styles.code}>pages/index page</code>
        </Headline>

        <Header />
        <a href="/about" onClick={handleClick}>
          Button
        </a>
        <Logo />

        <Grid />
      </main>
    </>
  );
}
