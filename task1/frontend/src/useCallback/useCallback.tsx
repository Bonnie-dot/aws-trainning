import React, {useCallback, useEffect, useMemo, useState} from "react";
import ButtonDemo from './ButtonDemo'
import ButtonDemoWithArray from './ButtonDemo3'
import ButtonDemoProp from './ButtonDemo2'

const Notes = () => {
  const [notes, setNotes] = useState<string[]>([]);
  let [count, setCount] = useState(0);

  const [name] = useState<string>('TestChild组件');
  const addNote = useCallback(() => {
    const newNote = "random";
    setNotes(n => [...n, newNote]);
  }, [setNotes]);
  // const interval = useCallback(() => {
  //   setInterval(() => {
  //     setCount(++count);
  //   }, 8000)
  // }, []);
  // useEffect(() =>interval(),[interval]);
  return (
      <div>
        <ButtonDemo addNote={addNote}/>
        <ButtonDemoWithArray names={useMemo(() => name, [name])}/>
        {notes.map((note, index) => (
            <p key={index}>{note}</p>
        ))}
        <p>{count}</p>
        <ButtonDemoProp/>
      </div>
  );
};

export default Notes;
