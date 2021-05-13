import React, {memo} from "react";

type prop = {
  addNote: () => void
}
const ButtonDemo = memo(({addNote}: prop) => {
  console.log("ButtonDemo re-rendered :( ");
  return (
      <div>
        <button onClick={addNote}>Add</button>
      </div>
  );
});

export default ButtonDemo;
