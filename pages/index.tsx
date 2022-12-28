import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Transfer List</title>
        <meta name="description" content="An ordinary transfer list" />
        <link rel="icon" href="/D.svg" />
      </Head>
      <main className={styles.main}>
        <h1>Guess the Number</h1>
        <h2>Enter a guess between 0 to 100</h2>
        <input></input>
        <div>
          <button>Submit</button>
          <button>Start Game</button>
        </div>
        <h3>direction and value of the guess</h3>
        <h3>Your guesses:</h3>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.dangoer.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by
          <span className={styles.logo}>
            <Image src="/D.svg" alt="D Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
