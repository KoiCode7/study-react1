import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "src/styles/Home.module.css";
import { Grid } from "src/components/Grid";
import { Logo } from "src/components/Logo";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <main className={styles.main}>
        <Headline title="about ">
          <code className={styles.code}>pages/index page</code>
        </Headline>

        <Header />

        <Logo />

        <Grid />
      </main>
    </>
  );
}
