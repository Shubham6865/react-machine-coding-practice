import { useState } from "react";
import './todo.css'
const Todo = () => {

  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState();
  const [taskDetail, setTaskDetail] = useState();

  const handleAdd = () => {
    const newTask = {
      id: Date.now(),
      Title: taskTitle,
      Detail: taskDetail
    }

    setTasks([...tasks, newTask]);
    setTaskTitle('');
    setTaskDetail('');
  }

  const handleDelete = (id) => {

    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  const handelDeleteAll = () => {
    setTasks([]);

  }
  return (
    <div>

      <h1 className="title">Todo App</h1>

      <div>
        <input type="text" className="inputtab" placeholder="Enter Title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        <input type="text" className="inputtab" placeholder="Enter Task Detail" value={taskDetail} onChange={(e) => setTaskDetail(e.target.value)} />
        <button className="btn" onClick={handleAdd}>Add</button>
      </div>
      <div><button className="btn" onClick={() => handelDeleteAll()}>
        Delete All
      </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} >
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <h3>{task.Title}</h3>
              <h3>{task.Detail}</h3>
            </div>

            <button onClick={() => handleDelete(task.id)} className="btn" >Delete</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;