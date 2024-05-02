import { useState } from 'react';

export default function Counter() {
 const [count, setCount] = useState(1);
 const [increase,setIncrease]=useState(1)

 function handleclick() {
  setCount(count + increase);
 }
 function decrement(){
  setCount(count - increase);
 }
 function incresingvalue() {
  setIncrease(increase +1)
 }
 return (
   <div>
     <h1>the count is:{count}</h1>
     <button onClick={handleclick}>increment</button>
     <button onClick={decrement}>decrementings</button>
   <h1>the count increses{increase }</h1>
   <button onClick={incresingvalue}>increase</button>
   
   </div>
 );
}


