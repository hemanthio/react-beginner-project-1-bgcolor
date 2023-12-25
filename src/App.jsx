import React from 'react'
import { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")
  return (
   <>
   <div className='w-full h-screen' 
   style={{backgroundColor:color}}>
   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
    <div className='flex flex-wrap justify-center bg-white px-3 py-2 m-1 rounded-3xl'>
      
<button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full m-1 text-white' 
style={{backgroundColor:"red"}}>Red</button> //1 method of changing bgcolor of button using style button

<button onClick={()=>setColor("green")} className='outline-none px-4 py-1 bg-green-900 rounded-full m-1 text-white' 
>Green</button>   //2 nd method of changing bg color of button with tailwind property

<button onClick={()=>setColor("blue")}
className='outline-none px-4 py-1 rounded-full m-1 text-white' 
style={{backgroundColor:"blue"}}>Blue</button>

<button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full m-1 text-white' 
style={{backgroundColor:"black"}}>Black</button>

<button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full m-1 text-white' 
style={{backgroundColor:"orange"}}>Orange</button>


    </div>
     </div>
   </div> 
   </>
  )
}

export default App