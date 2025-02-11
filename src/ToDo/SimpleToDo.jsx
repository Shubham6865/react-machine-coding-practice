import React, { useState } from 'react'

const SimpleToDo = () => {

  const [formData, setFormData] = useState({
    taskName: '',
    taskDetail: '',
  })

  const handleChanage = (e) => {
    e.preventDefault();

    const { name, value } = e.target
    setFormData(...formData[name] = value);
  }
  return (
    <div>

      <form >
        <label htmlFor="taskName"> Task Name:-</label>
        <input type="text" name="taskName" id="taskName" onChange={handleChanage} value={formData.taskName} />
        <label htmlFor="taskDetail">Task Detail:-</label>
        <input type="text" name="taskDetail" id="taskDetail" onChange={handleChanage} value={formData.taskDetail} />
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default SimpleToDo
