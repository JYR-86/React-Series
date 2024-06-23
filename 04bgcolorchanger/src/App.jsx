
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className="w-screen h-screen" style={{backgroundColor: color}}>
        <div className=" fixed flex flex-wrap justify-centre bottom-12  left-20"> 
          <div className="flex flex-wrap gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={()=>setColor("red")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor()} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:color}}>Default</button>
          </div>
        </div>
      </div>
   
  )
}

export default App
