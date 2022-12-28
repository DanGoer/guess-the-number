import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 101)
  );
  const [numberGuess, setNumberGuess] = useState();
  const guesses = [];

  const handleNumber: (
    value: number,
    e: React.SyntheticEvent<EventTarget>
  ) => void = (value: number, e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Guess the Number!</title>
        <meta name="description" content="A Guessing Game" />
        <link rel="icon" href="/D.svg" />
      </Head>
      <main className={styles.main}>
        <h1>Guess the Number</h1>
        <h2>Enter a guess between 0 to 100</h2>
        <input
          onChange={(e) => handleNumber(e.target.value, e)}
          placeholder="Enter a Number"
          value={numberGuess}
        ></input>
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
