import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(10)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    if(counter>=20){
      setCounter(counter);
    }
    else{
    setCounter(counter+1);}
    
  }

  const removeValue = () => {
    if(counter<=0){
      setCounter(counter);
    }
    else{
    setCounter(counter - 1)
    }
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <br/>
      <button
      onClick={removeValue}
      >remove value {counter}</button>
    </>
  )
}

export default App
