import React, {useEffect, useState} from "react";

const UserEffect = ()=>{
  let [count,setCount] = useState(0);
  useEffect(()=>{
    return ()=>console.log('once ')
  },[])
  return (<div>
    <p>only once</p>
    <button onClick={()=>setCount(++count)}>click {count} times</button>
  </div>)
}
export default UserEffect;
