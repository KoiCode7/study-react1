import Head from "next/head";
import { useCallback, useState } from "react";
import { useBgColor } from "src/hooks/useBgColor";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import "src/styles/globals.css";

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Documents",
    description: "Find in-depth information about Next.js features and&nbsp;API.",
  },

  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!",
  },

  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects.",
  },

  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.",
  },
];

export default function App({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  const [items, setItems] = useState(ITEMS);
  const handleDelete = useCallback(() => {
    setItems((prevItem) => prevItem.slice(0, prevItem.length - 1));
  }, []);

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component
        {...pageProps}
        {...counter}
        {...inputArray}
        items={items}
        handleDelete={handleDelete}
      />
    </>
  );
}
