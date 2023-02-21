import { Inter } from "@next/font/google";
import Image from "next/image";
import styles from "src/components/Headline/Headline.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Headline = (props) => {
  return (
    <div className={styles.description}>
      <button onClick={props.handleDelete}>Delete</button>
      <p>
        {props.title}Get started by editing&nbsp;
        {props.children}
        Number of items: {props.items.length}
      </p>
      <div>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  );
};
