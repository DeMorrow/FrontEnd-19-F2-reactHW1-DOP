import { useState } from "react";
import Vergil from "./Vergil";
import Home from "./home";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div>
      <h1>{num}{num == 15 ? " MAX": num == 0 ? ' MIN': '' }</h1>
      <button onClick={() =>{
        setNum(num + 5)
        if (num > 11) {
          setNum(15)
        }
      }}>+5</button>
      <button onClick={() =>{
        setNum(num - 5)
        if (num < 5) {
          setNum(0)
        }
      }}>-5</button>
      <button onClick={() =>{
        setNum(num + 1)
        if(num > 14){
          setNum(15)
        }

      }}>+</button>
      <button onClick={() =>{
        setNum(num - 1)
        if(num < 1){
          setNum(0)
        }

      }}>-</button>
      <button onClick={() =>{
        setNum(0)

      }}>0</button>
      <button onClick={() =>{
        setNum(1000000000000)
      }}>DON'T CLICK</button>
      {/* <input id="input" type="text" placeholder="Введите число" />
      <button onClick={() =>{
        num.value = document.getElementById("input").value
      }}>Set Number</button> */}

{/*       
      <Home />
      <Vergil/>
       */}
    </div>
  );
}

export default App;
