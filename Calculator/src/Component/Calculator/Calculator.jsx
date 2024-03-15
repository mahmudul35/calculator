import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    setValue(value + e.target.innerHTML);
  };
  const equal = () => {
    setValue(eval(value));
  };
  const AC = () => {
    setValue("");
  };
  const DELL = () => {
    setValue(value.toString().slice(0, -1));
  };
  return (
    <div class="calcultor">
      <input readOnly type="text" placeholder="0" value={value} />

      <div>
        <button onClick={AC}>AC</button>
        <button onClick={DELL}>DEL</button>
        <button onClick={DELL}>%</button>
        <button onClick={handleClick}>/</button>
      </div>
      <div>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>*</button>
      </div>
      <div>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
      </div>
      <div>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>+</button>
      </div>
      <div>
        <button onClick={handleClick}>00</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button class="equal" onClick={equal}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
