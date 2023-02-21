import { Inter } from "@next/font/google";
import Head from "next/head";
import { Grid } from "src/components/Grid";
import { Header } from "src/components/Header";
import { Headline } from "src/components/Headline";
import { Logo } from "src/components/Logo";
import styles from "src/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  return (
    <>
      <Head>
        <title>Index page</title>
      </Head>
      <main className={styles.main}>
        <Headline title="index " items={props.items} handleDelete={props.handleDelete}>
          <code className={styles.code}>pages/index page, </code>
        </Headline>

        {props.isShow ? <h3>{props.count}</h3> : null}
        <button onClick={props.handleClick}>Button</button>
        <button onClick={props.handleDisplay}>{props.isShow ? "Hide" : "Show"}</button>

        <input ref={props.textRef} type="text" value={props.text} onChange={props.handleChange} />
        <button onClick={props.handleAdd}>Add</button>
        <ul>
          {props.array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>

        <Header />
        <Logo />
        <Grid items={props.items} handleDelete={props.handleDelete} />
      </main>
    </>
  );
};

export default Home;
