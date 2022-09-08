import React, { useState } from "react";
import'./Calculator.css'
import Header from "./Header";

export default function Calculator() {
  const [num, setNum] = useState(0);
  const [oldnum, setOldNum] = useState(0);
  const [operator, setOperator] = useState();

  function inputNum(e){
    var input=e.target.value
    if(num==0){
      setNum(input)
    }else{
      setNum(num + input);
    }
  }

  const limpiar= () => {
    setNum(num.slice(0,0));
  }

  function porcentaje() {
    setNum(num / 100);
  }

  const backspace= () => {
    setNum(num.slice(0,-1));
  }

  function operadores(e) {
    var operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);

  }

  function calcular() {
    if (operator === "/") {
      setNum(parseInt(oldnum) / parseInt(num));
    } else if (operator === "x") {
      setNum(parseInt(oldnum) * parseInt(num));
    } else if (operator === "-") {
        console.log(oldnum)
        console.log(num)
        console.log(oldnum-num)
      setNum(parseInt(oldnum) - parseInt(num));
    } else if (operator === "+") {
      setNum(parseInt(oldnum) + parseInt(num));
    }
  }
  return (
    <div> 
      <Header/>
      <div style={{marginTop: "4em"}}></div>
      <div className='wrapper'>
      <h1 className='result'>{num}</h1>
      <button onClick={limpiar} id="eliminar">AC</button>
      <button onClick={backspace} id="c">C</button>
      <button onClick={porcentaje} id="porcen">%</button>
      <button className="orange" onClick={operadores} value="/" id="division">/</button>
      <button className="gray" onClick={inputNum} value={7} id="siete">7</button>
      <button className="gray" onClick={inputNum} value={8} id="ocho">8</button>
      <button className="gray" onClick={inputNum} value={9} id="nueve">9</button>
      <button className="orange" onClick={operadores} value="x" id="multiplicacion">x</button>
      <button className="gray" onClick={inputNum} value={4} id="cuatro">4</button>
      <button className="gray" onClick={inputNum} value={5} id="cinco">5</button>
      <button className="gray" onClick={inputNum} value={6} id="seis">6</button>
      <button className="orange" onClick={operadores} value="-" id="resta">-</button>
      <button className="gray" onClick={inputNum} value={1} id="uno">1</button>
      <button className="gray" onClick={inputNum} value={2} id="dos">2</button>
      <button className="gray" onClick={inputNum} value={3} id="tres">3</button>
      <button className="orange" onClick={operadores} value="+" id="suma">+</button>
      <button className="gray" onClick={inputNum} value={0} id="cero">0</button>
      <button className="gray" onClick={operadores} value="," id="coma">,</button>
      <button className="gray" id="logo">,</button>
      <button onClick={calcular} value="=" id="igual">=</button>
      </div>
    </div>
    
  );
}
