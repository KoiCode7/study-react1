import { Inter } from "@next/font/google";
import Head from "next/head";
import { Grid } from "src/components/Grid";
import { Header } from "src/components/Header";
import { Headline } from "src/components/Headline";
import { Logo } from "src/components/Logo";
import styles from "src/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const About = (props) => {
  return (
    <>
      <Head>
        <title>About page</title>
      </Head>
      <main className={styles.main}>
        <Headline title="about " items={props.items} handleDelete={props.handleDelete}>
          <code className={styles.code}>pages/index page, </code>
        </Headline>

        <div className={styles.container}>
          <div className={styles.counter}>
            {props.isShow ? <h3>{props.doubleCount}</h3> : null}
            <button onClick={props.handleClick}>Button</button>
            <button onClick={props.handleDisplay}>{props.isShow ? "Hide" : "Show"}</button>
          </div>

          <div className={styles.add}>
            <input
              ref={props.textRef}
              type="text"
              value={props.text}
              onChange={props.handleChange}
            />
            <button onClick={props.handleAdd}>Add</button>
            <ul>
              {props.array.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
        </div>

        <Header />

        <Logo />

        <Grid items={props.items} handleDelete={props.handleDelete} />
      </main>
    </>
  );
};

export default About;
