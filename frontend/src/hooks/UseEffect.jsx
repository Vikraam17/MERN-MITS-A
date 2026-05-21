import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0);
    const [like,setLike] = useState(0);
    useEffect(()=>{
        console.log("component Rendered")
    },[count,like])

    const handleIncrement = ()=>{
        setCount(count+1);
    }
    const handleLikeIncrement = ()=>{
        setLike(like+1);
    }
  return (
    <div>
        <h1>UseEffect</h1>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
        <p>{like}</p>
        <button onClick={handleLikeIncrement}>+</button>
    </div>
  )
}

export default UseEffect