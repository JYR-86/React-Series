import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(5)
  const plusValue=()=>{
    if(counter >=10){
      setCounter(counter)
    }else{
      setCounter(counter+1)
    }
  }
  const minusValue=()=>{
    if(counter <=0){
      setCounter(counter)
    }else{
      setCounter(counter-1)
    }
  }
  

  return (
    <>
      <h1>Hii Developer</h1>
      <h2>Counter Project</h2>
      <button onClick={plusValue}>+</button>
      <h2>Value : {counter}</h2>
      <button onClick={minusValue} >-</button>
    </>
  )
}

export default App
