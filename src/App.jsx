import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'

function App() {
  // const [count, setCount] = useState(0)
const [compteur, setCompteur] = useState(0)
  const incrementer = () => {
    setCompteur(compteur + 1)
  }
  const decrementer = () => {
    setCompteur(compteur - 1)
  }
  const reset = () => {
    setCompteur(0)
  }
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Compteur{compteur}</h1>
      <div className="card">
        <button onClick={incrementer}>+</button>
        <button onClick={decrementer}>-</button>
        <button onClick={reset}>Reset</button>
   
      </div>
     <List/>
    </>
  )

}

export default App
