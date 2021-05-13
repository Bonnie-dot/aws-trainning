import React, {useEffect, useState} from "react";

const UserEffect = ()=>{
  let [count,setCount] = useState(0);
  let [number,setNumber] = useState(0);
  useEffect(()=>{
    console.log('simple');
  });
  return (
      <div>
        <p>simple</p>
        <button onClick={()=>setCount(++count)}>click {count} times</button>
        <button onClick={()=>setNumber(++number)}>click {number}</button>
      </div>
  )
}
export default UserEffect;
