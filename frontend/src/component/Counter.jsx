import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const handleIncreament = () =>{
        setCount(count+1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2>count : {count}</h2>
        <button onClick={handleIncreament}>Inc</button>
        <button onClick={()=>setCount(0)}>reset</button>
        <button onClick={()=>setCount(count-1)}>dec</button>
    </div>
  )
}

export default Counter