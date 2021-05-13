import {  useRef,forwardRef,MutableRefObject,useImperativeHandle,Ref} from "react";

const InputEl = forwardRef((props: {}, ref: Ref<any>): JSX.Element=>{
  const inputEl: MutableRefObject<any> = useRef();

  useImperativeHandle(ref, ()=>({
    value: (inputEl.current as HTMLInputElement).value,
    getType: () => (inputEl.current as HTMLInputElement).type,
    focus: () => (inputEl.current as HTMLInputElement).focus()
  }));

  return(
      <input ref={inputEl} type="text" {...props}/>
  )
})
// //暴露整个input节点给父级
// const InputEl = forwardRef((props: {}, ref: Ref<any>): JSX.Element=>{
//   return(
//       <input ref={ref} type="text" {...props}/>
//   )
// });

//父级
export default function InputWithFocusButton() {
  const inputEl: MutableRefObject<any> = useRef(null);

  function onButtonClick() {
    inputEl.current.focus();
    console.log(inputEl.current.height);
  };
  return (
      <>
        <InputEl ref={inputEl} />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
  );
}
