import React, { useRef, useEffect, useState } from "react";
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [leftList, setLeftList]=useState([]);
  const [rightList, setRightList]=useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  const handleMove=(index, direction)=>{

    const newItem = todos[index];
    if(direction==='left'){
    setLeftList([...leftList,newItem])
      
    }
    else if(direction==='right'){
       setRightList([...rightList,newItem])
    }

    setTodos(todos.filter((item,i) => i!== index))
    console.log(leftList)
  }
  return (
    <>
      <h1>App</h1>

      <div style={{display:'flex' , justifyContent:'space-between'}}>
        <div style={{border:'1px solid'}}>
          {
           leftList &&  leftList.map((todo)=>(
              <p  key={todo.id}>{todo.title}</p>
            ))
          }
        </div>
        <div>
          {todos &&
            todos.slice(0, 10).map((todo, index) => (
              <div key={index} style={{ border: "1px solid" }}>
               <p> {todo.title}</p>
                <button onClick={()=>handleMove(index, 'left')}> left</button>
                <button onClick={()=>handleMove(index, 'right')}>Right</button>
              </div>
            ))}
        </div>
        <div style={{border:'1px solid'}}>
         {
           rightList &&  rightList.map((todo)=>(
              <p key={todo.id}>{todo.title}</p>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default App;
