import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  //let counter = 5;

  const addValue = () => {
    setCounter(counter+1);
  }

  const removeValue = () => {
    if(counter>0)
    setCounter(counter-1);
  }

  return (


    <>
      <h1>Hi there</h1>
      <h2 >Counter value is {counter}</h2>

      <button onClick={addValue}>Add Counter</button>
      <br/>
      <button onClick={removeValue}>Subtract Counter</button>
    </>
  )
}

export default App
