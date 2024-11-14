import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive");

  return (

     <div className = "w-full h-screen duration-200" style = {{backgroundColor : color}} >
        <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
         <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button onClick = {() => setcolor("red")} className = "outline-none px-2 py-1 text-white shadow-lg text-center rounded-full" style = {{backgroundColor : "red"}}>red</button>
            <button onClick = {() => setcolor("yellow")}className = "outline-none px-2 py-1 text-black shdow-lg text-center rounded-full" style = {{backgroundColor : "yellow"}}>yellow</button>
            <button onClick = {() => setcolor("green")}className = "outline-none px-2 py-1 text-white shadow-lg text-center rounded-full" style = {{backgroundColor : "green"}}>green</button>
            <button onClick = {() => setcolor("white")}className = "outline-none px-2 py-1 text-black shadow-lg text-center rounded-full" style = {{backgroundColor : "white"}}>white</button>
            <button onClick = {() => setcolor("blue")}className = "outline-none px-2 py-1 text-white shadow-lg text-center rounded-full" style = {{backgroundColor : "blue"}}>blue</button>
            <button onClick = {() => setcolor("grey")}className = "outline-none px-2 py-1 text-white shadow-lg text-center rounded-full" style = {{backgroundColor : "grey"}}>grey</button>
            <button onClick = {() => setcolor("pink")}className = "outline-none px-2 py-1 text-black shadow-lg text-center rounded-full" style = {{backgroundColor : "pink"}}>pink</button>
            <button onClick = {() => setcolor("brown")}className = "outline-none px-2 py-1 text-white shadow-lg text-center rounded-full" style = {{backgroundColor : "brown"}}>brown</button>
            <button onClick = {() => setcolor("purple")}className = "outline-none px-2 py-1 text-white shadow-lg text-center rounded-full" style = {{backgroundColor : "purple"}}>purple</button>
         </div>
         </div>

     </div>
  )
}

export default App
