import { useState } from "react"


function App() {
 let [count, setcount]= useState(0);
 const changeCounter= ()=>{
  setcount(count+1);
 }
  return (
    <>
   <button onClick={changeCounter}>
    Raneem Abdullah{count}
   </button>
   </>
  );
}

export default App;
