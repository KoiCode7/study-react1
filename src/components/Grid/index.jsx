import { Inter } from "@next/font/google";
import styles from "src/components/Grid/Grid.module.css";

const inter = Inter({ subsets: ["latin"] });

export const Grid = (props) => {
  return (
    <div className={styles.grid}>
      <button onClick={props.handleDelete}>Delete</button>
      {props.items.map((item) => {
        return (
          <a
            key={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {item.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
};
