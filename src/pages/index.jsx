import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "src/styles/Home.module.css";
import { Grid } from "src/components/Grid";
import { Logo } from "src/components/Logo";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    textRef,
    handleChange,
    handleAdd,
    items,
    handleDelete,
  } = props;

  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <main className={styles.main}>
        <Headline title="index " items={items} handleDelete={handleDelete}>
          <code className={styles.code}>pages/index page, </code>
        </Headline>

        {isShow ? <h3>{count}</h3> : null}
        <button onClick={handleClick}>Button</button>
        <button onClick={handleDisplay}>{isShow ? "Hide" : "Show"}</button>

        <input ref={textRef} type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <Header />
        <Logo />
        <Grid items={items} handleDelete={handleDelete} />
      </main>
    </>
  );
}
