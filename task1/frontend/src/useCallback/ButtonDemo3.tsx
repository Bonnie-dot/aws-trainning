import React, {memo} from "react";

type prop = {
  names: string;
}
const ButtonDemo = ({names}: prop) => {
  console.log("ButtonDemo3 have a array prop");
  return (
      <div>
        {names}
      </div>
  );
}

export default ButtonDemo;
