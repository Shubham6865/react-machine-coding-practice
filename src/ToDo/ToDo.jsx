import { useState } from "react";

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
        <input type="text" placeholder="Enter Title" value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} />
        <input type="text" placeholder="Enter Task Detail" value={taskDetail} onChange={(e) => setTaskDetail(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div><button onClick={() => handelDeleteAll()}>
        Delete All
      </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.Title}</h3>
            <h3>{task.Detail}</h3>
            <button onClick={() => handleDelete(task.id)}>Delete</button>

          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo;