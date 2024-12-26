import React, { useState } from 'react';
import Counter from './Counter/Counter';
import ToDo from './ToDo/ToDo';
import './app.css';
import Modal from './Modal/Modal';

function App() {

  const [activeTask, setActiveTask] = useState('Counter');

  const taskBtn = ['Counter', 'ToDo', 'Modal'];

  const url = `https://github.com/Shubham6865/react-machine-coding-practice/blob/main/src/${activeTask}/${activeTask}.jsx`

  return (
    <>


      <div className='container__main'>
        <h1 className='title'>React Machine Coding Questions</h1>
        <div className='taskBtns'>
          {taskBtn.map((task, index) => (
            <button
              key={index}
              className={`taskbtn ${activeTask === task ? 'active' : ''}`}
              onClick={() => setActiveTask(task)}
            >
              {task}
            </button>
          ))}
        </div>

        <div className='componentContainer'>

          {activeTask === 'Counter' && <Counter />}
          {activeTask === 'ToDo' && <ToDo />}
          {activeTask === 'Modal' && <Modal />}
        </div>
        <div className="githublink ">
          <a target='_blank' className='taskbtn' href={url} >{`Navigate to ${activeTask} Code`}</a>

        </div>
      </div>
    </>
  );
}

export default App;
