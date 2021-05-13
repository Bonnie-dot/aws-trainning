import React, {useEffect, useLayoutEffect, useState} from 'react';

export default function UseLayoutEffect() {
  const [state, setState] = useState("hello world")

  useEffect(() => {
    let i = 0;
    while(i <= 1000000000) {
      i++;
    };
    setState("world hello");
  }, []);

  // useLayoutEffect(() => {
  //   let i = 0;
  //     while(true) {
  //       i++;
  //     };
  // }, []);

  return (
      <>
        <div>{state}</div>
      </>
  );
}
