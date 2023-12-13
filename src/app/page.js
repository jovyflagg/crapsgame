"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {

<<<<<<< HEAD
  const [diceSum, setDiceSum] = useState([]);
  const [streak, setStreak] = useState(0);
  const [comeout, setComeOut] = useState(true);


=======
  const [diceSum, setDiceSum] = useState(0);
  const [count, setCount] = useState(0);
  // const sum = Math.floor(Math.random() * 6 + 1);
  
 
>>>>>>> f31541290a9fd54138f472c851068f8a83b382da
  const rollDice = () => {
    console.log("rolling the dice...");
    const die1 = Math.floor(Math.random() * 6 + 1);
    const die2 = Math.floor(Math.random() * 6 + 1);
    const sum = die1 + die2;
<<<<<<< HEAD
    // const sum = 5;
    setDiceSum(pre => [...pre,sum]);

    // This is not 7
    if (comeout) {
      setStreak(0)
      comeOutSwitch(sum)
    } else {
      pointSwitch(sum)
    }
=======
    setDiceSum(sum);
    setCount(prev => prev + 1);
    
>>>>>>> f31541290a9fd54138f472c851068f8a83b382da
  }

  const pointSwitch = (sum) => {
    switch (sum) {
      case 7:
        console.log("Lose " + sum);
        setComeOut(true);
        break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
      case 12:
        console.log("Point on: " + sum);
        setStreak(prev => prev + 1)
        break;
      default:
        break;
    }

  }

  const comeOutSwitch = (sum) => {
    switch (sum) {
      case 7:
      case 11:
        console.log("Winner " + sum);
        setStreak(prev => prev + 1)
        break;

      case 2:
      case 3:
      case 12:
        console.log("Lose " + sum);
        setStreak(0)
        break;

      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
        setComeOut(false);
        console.log("Point on: " + sum);
        setStreak(prev => prev + 1)
        break;
      default:
        break;
    }
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
        <span style={{ fontSize: "58px" }}>{diceSum[diceSum.length-1]}</span>
        {/* {sum} */}
        <button onClick={() => rollDice()}>Roll the dice</button>
      </div>
      <div>

      </div>


      <div className={styles.grid}>
        <a
        >
          <h2>
<<<<<<< HEAD
            {streak} # of roll streak
=======
           {count} # of ROLLS:
>>>>>>> f31541290a9fd54138f472c851068f8a83b382da
          </h2>
        </a>
      </div>
      <h2>
        Prev Rolls
      </h2>
      
      <>{diceSum[diceSum.length-1]}  {diceSum.map(roll => ", " + roll )}</>
    </main>
  )
}
