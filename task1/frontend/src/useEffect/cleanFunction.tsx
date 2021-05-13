import React, {useEffect, useState} from "react";

const UserEffect = ()=>{
  let [count,setCount] = useState(0);
  useEffect(()=>{
   const timeId = setInterval(()=>{
      console.log('enter')
    },3000);
   return ()=>{
     console.log('out');
     clearInterval(timeId)
   }
  })
  return (<div>
    <p>clean function</p>
    <button onClick={()=>setCount(++count)}>click {count} times</button>
  </div>)
}
export default UserEffect;
