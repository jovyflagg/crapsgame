"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {

  const [diceSum, setDiceSum] = useState(0);
  const [count, setCount] = useState(0);
  // const sum = Math.floor(Math.random() * 6 + 1);
  
 
  const rollDice = () => {
    console.log("rolling the dice...");
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);
    const sum = die1 + die2;
    setDiceSum(sum);
    setCount(prev => prev + 1);
    
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to Craps Game!
        </p>
        <div>
          By Flagg
        </div>
      </div>

      <div className={styles.center}>
       <span style={{fontSize: "58px"}}>{diceSum}</span> 
        {/* {sum} */}
        <button onClick={() => rollDice()}>Roll the dice</button>
      </div>
      <div>
     
      </div>
     

      <div className={styles.grid}>


        <a

        >
          <h2>
           {count} # of ROLLS:
          </h2>

        </a>
      </div>
    </main>
  )
}
