import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "src/styles/Home.module.css";
import { Grid } from "src/components/Grid";
import { Logo } from "src/components/Logo";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);

  const handleClick = useCallback(
    () => {
      if (count < 10) {
        setCount((count) => count + 1);
      }
    },
    [count]
  );

  useEffect(() => {
    document.body.style.backgroundColor = "skyblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
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

        <h3>{count}</h3>
        <button onClick={handleClick}>Button</button>
        <Header />
        <Logo />

        <Grid />
      </main>
    </>
  );
}
