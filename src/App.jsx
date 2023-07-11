import './App.css'
import { useReducer } from 'react'
import { useEffect, useState } from 'react';

function App() {


  const [count, updateCount] = useReducer(countReducer, 0);

  function countReducer(score, action) {
    if (action === "simple") {
      return score + 1;
    }
    if (action === "anneaux exterieur") {
      return score * 2;
    } if (action === "anneau intérieur") {
      return score * 3;
    } if (action === "anneau central") {
      return score + 25;
    } if (action === "Bull's eye") {
      return score + 50;
    }
    if (action === "reset") {
      return score == 0;
    }
    else {
      throw new Error();
    }


  }

  useEffect(() => {
    if (count > 501) {
      alert("Vous avez Perdu")

    }
    if (count == 501) {
      alert("Vous avez Gagnez")

    }


  }, [count]);
  return (
    <><div className='body' >


      <h1>Le 501</h1>
      <img src="src/image/Flechettes.jpeg" alt="" />

      <div className='button'>
        <button onClick={() => updateCount("simple")}>simple</button>
        <button onClick={() => updateCount("anneaux exterieur")}>anneaux exterieur</button>
        <button onClick={() => updateCount("anneau intérieur")}>anneau intérieur</button>
        <button onClick={() => updateCount("anneau central")}>anneau central</button>
        <button onClick={() => updateCount("Bull's eye")}>Bull's eye</button>
        <button onClick={() => updateCount("reset")}>Reset</button>


        <p className='score' >Score: {count}</p>
      </div>
    </div>
    </>
  )
}

export default App
