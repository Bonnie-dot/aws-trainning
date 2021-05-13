import React, {useEffect, useState} from "react";

export default function Example() {
  let [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  });

  return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={()=>setCount(++count)}>23123</button>
      </div>
  );
}
