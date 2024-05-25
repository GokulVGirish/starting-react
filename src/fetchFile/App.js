import Button from "./Button"
import Card from "./Card"
import { useState,useEffect } from "react";

const App=()=>{
    const [count,setCount]=useState(1)
    const [userData,setUserData]=useState({})
    const [error,setError]=useState("")
      const increment = () => {
        setCount((prevCount) => prevCount + 1);
      };
      const decrement = () => {
        if (count > 1) {
          setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
        }
      };

    const getData=async(count)=>{
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        if(data.ok){
            const json = await data.json();
            setUserData(json);
             setError("");
            
        }else{
            setUserData(null)
            setError("cant fetch data")
        }
    




    }

    useEffect(()=>{
    
      

        getData(count)


    },[count])
 
   

   return (
     <div className=" h-screen w-screen flex  flex-col items-center justify-center">
        <h1 className="text-xl font-bold">{count}</h1>
       <div className="w-[80%]  flex items-center justify-center">
         <Button operation={decrement}  condition={"dec"} />
         <Card data={userData?userData:{}} error={error?error:null} />
         <Button operation={increment} condition={"inc"} />
       </div>
     </div>
   );

}
export default App