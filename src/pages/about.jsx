import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "src/styles/Home.module.css";
import { Grid } from "src/components/Grid";
import { Logo } from "src/components/Logo";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBg } from "src/hooks/useBg";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, textRef, handleChange, handleAdd } = useInputArray();
  useBg();


  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <main className={styles.main}>
        <Headline title="about ">
          <code className={styles.code}>pages/index page</code>
        </Headline>

        <div className={styles.container}>
          <div className={styles.counter}>
                {isShow ? <h3>{count}</h3> : null}
        <button onClick={handleClick}>Button</button>
        <button onClick={handleDisplay}>{isShow ? "Hide" : "Show"}</button>
          </div>

          <div className={styles.add}>
        <input ref={textRef} type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
          </div>
        </div>

        <Header />

        <Logo />

        <Grid />
      </main>
    </>
  );
}
