import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "src/styles/Home.module.css";
import { Grid } from "src/components/Grid";
import { Logo } from "src/components/Logo";
import { Headline } from "src/components/Headline";
import { Header } from "src/components/Header";
import { useCallback, useEffect, useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);

  const textRef = useRef();

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("Please write within 5 characters");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    if (prevCount > 3 && prevCount < 6) {
      return;
    }
    setIsShow((prevIsShow) => !prevIsShow);
  }, [count]);

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("The word has already existed.");
        return prevArray;
      }

      if (text.trim() === "") {
        return prevArray;
      }

      return [...prevArray, text];
    });

    setText("");
    textRef.current.focus();
  }, [text]);

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

        <Grid />
      </main>
    </>
  );
}
