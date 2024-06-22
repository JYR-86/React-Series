import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, isNumberAllowed] = useState(false)
  const [charAllowed, isCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="~!@#$%^&*"
    for(let i = 1 ; i < length ; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length,charAllowed,numberAllowed,setPassword])

  useEffect(()=>{
    generatePassword()
  },[length,numberAllowed,charAllowed,setPassword])

  return (
   <div className='main-box'>
    <h1>Password Generator</h1>
    <div className="top-box">
      <input type="text" value={password} readOnly />
      <button>Copy</button>
    </div>
    <div className="bottom-box">
      <input type="range" min={6} max={10} value={length}  onChange={(e)=>setLength(e.target.value)}/>
      <label >Length({length})</label>
      <input type="checkbox" defaultChecked={numberAllowed}  onClick={()=>{isNumberAllowed((prev)=>!prev)}} />
      <label>Number</label>
      <input type="checkbox" defaultChecked={charAllowed} onClick={()=>{isCharAllowed((prev)=>!prev)}} />
      <label >Character</label>
    </div>
   </div>
  )
}

export default App
