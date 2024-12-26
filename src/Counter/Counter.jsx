import { useState } from "react";
import './counter.css';
const Counter = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {

      setCount(count + 1);
    }
  };
  const handleDecrement = () => {
    if (count > 0) {

      setCount(count - 1);
    }
  };
  return (

    <>
      <div className="container ">
        <div className="counter__main">
          <h3 className="title">Counter which can increase max to 10 and min 0</h3>

          <div className="counter">
            <button onClick={handleDecrement}>Decrement</button>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
          </div>
          <div className="counter">
            <button onClick={() => setCount(0)}>Reset</button>
          </div>
        </div>

      </div>

    </>
  )
}

export default Counter;