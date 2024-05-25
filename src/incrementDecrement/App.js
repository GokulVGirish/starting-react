import Button from "./Button";
import { useState } from "react";

const App=()=>{
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(count+1)
    }
    const decrement=()=>{
      if(count>0){
          setCount(count - 1);
      }
    }
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg mt-4">
          <div className="bg-white p-7 w-96 rounded-md flex justify-between items-center">
            <Button operation={decrement} condition={"dec"} />
            
            <h1>{count}</h1>

            <Button operation={increment} condition={"inc"} />
          </div>
        </div>
      </div>
    );
}
export default App;