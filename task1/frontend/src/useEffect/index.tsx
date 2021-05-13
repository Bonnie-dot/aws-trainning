import React, {useState} from "react";
import CleanFunction from './cleanFunction'
import Simple from './simple';
import OnlyOnce from './onlyOnce';
import { Button } from 'antd';
const UseEffect = ()=>{
  const [index,setIndex]= useState(0);
  const getComponent=()=>{
   if (index===0){
      return <Simple/>
    }else if (index===1){
      return <CleanFunction/>
    }else {
      return <OnlyOnce/>
    }
 }
  return(
      <div style={{width:"50%",margin:"0 auto"}}>
        <div style={{display:"flex",justifyContent:"space-around",margin:'30px'}}>
          <Button type="link" onClick={()=>setIndex(0)}>simple</Button>
          <Button type="link" onClick={()=>setIndex(1)}>cleanFunction</Button>
          <Button type="link" onClick={()=>setIndex(2)}>only Once</Button>
        </div>
        <div>
          {getComponent()}
        </div>

      </div>
  )
}
export default UseEffect;
