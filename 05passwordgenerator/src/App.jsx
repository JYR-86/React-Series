import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllow,setNumberAllow] = useState(false);
  const [charAllow,setCharAllow] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow){ str += "0123456789"}
    if(charAllow){ str += "~`!@#$%^&*_?"}
    for(let i=1 ; i<=length ; i++){
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setPassword(pass) 
  },[length,numberAllow,charAllow])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllow,charAllow,passwordGenerator])

  const passRef = useRef(null)
  const copyToClipboard = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className="bg-gray-700 w-screen h-screen text-center">
        <h1 className="text-center text-white text-4xl">Password Generator</h1>
      <div className="w-screen max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
        
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} ref={passRef} placeholder='password' className="outline-none w-full py-1 px-3" readOnly />
            <button onClick={copyToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={20} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}} /> <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id='numberInput' defaultChecked={numberAllow} onChange={()=>{setNumberAllow((prev)=>!prev)}} />
            <label htmlFor='numberInput' >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id='charInput' defaultChecked={charAllow} onChange={()=>{setCharAllow((prev)=>!prev)}} />
            <label htmlFor='charInput' >Characters</label>
          </div>
        </div>
      </div>
      </div>
      
    </>
  )
}

export default App
