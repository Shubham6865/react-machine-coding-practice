import React, { useState } from 'react';
import Counter from './Counter/Counter';
import ToDo from './ToDo/ToDo';
import './App.css';
import Modal from './Modal/Modal';
import SearchFilter from './SearchFilter/SearchFilter';
import FormValidation from './FormValidation/FormValidation';
import Pagination from './Pagination/Pagination';
import SimpleFormValidation from './FormValidation/SimpleFormValidation';
import SimpleToDo from './ToDo/SimpleToDo';
import ListSwap from './ListSwap/ListSwap';

function App() {

  const [activeTask, setActiveTask] = useState('Counter');

  const taskBtn = ['Counter', 'ToDo', 'Modal', 'SearchFilter', 'Pagination', 'FormValidation', 'SimpleFormValidation', 'SimpleToDo', 'ListSwap'];

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
          {activeTask === 'SearchFilter' && <SearchFilter />}
          {activeTask === 'Pagination' && <Pagination />}
          {activeTask === 'FormValidation' && <FormValidation />}
          {activeTask === 'SimpleFormValidation' && <SimpleFormValidation />}
          {activeTask === 'SimpleToDo' && <SimpleToDo />}
          {activeTask === 'ListSwap' && <ListSwap />}
        </div>
        <div className="githublink ">
          <a target='_blank' className='taskbtn' href={url} >{`Navigate to ${activeTask} Code`}</a>

        </div>
      </div>
    </>
  );
}

export default App;
