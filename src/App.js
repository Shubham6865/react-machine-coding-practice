import React, { useState } from 'react';
import Counter from './Counter/Counter';
import ToDo from './ToDo/ToDo';
import './app.css';

function App() {
  // State to track the active task
  const [activeTask, setActiveTask] = useState('Counter'); // Default to 'Counter'

  const taskBtn = ['Counter', 'ToDo'];

  return (
    <>


      <div className='container__main'>
        <h1 className='title'>React Machine Coding Questions</h1>
        <div className='taskBtns'>
          {taskBtn.map((task, index) => (
            <button
              key={index}
              className={`taskbtn ${activeTask === task ? 'active' : ''}`}
              onClick={() => setActiveTask(task)} // Update the active task on click
            >
              {task}
            </button>
          ))}
        </div>

        <div className='componentContainer'>

          {activeTask === 'Counter' && <Counter />}
          {activeTask === 'ToDo' && <ToDo />}
        </div>
        <div className="githublink ">
          <a target='_blank' className='taskbtn' href='https://github.com/Shubham6865/' >Navigate to Code</a>

        </div>
      </div>
    </>
  );
}

export default App;
