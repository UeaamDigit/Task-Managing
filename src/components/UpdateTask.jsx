import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskAction } from '../store/actions';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateTask() {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const task = tasks.find((t) => t.id === parseInt(id));

  const [taskName, setTask] = useState(task ? task.task : '');  // Set default value to empty string if task is not found
  const [completed, setCompleted] = useState(task ? task.completed : '');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Update state when task changes
    setTask(task ? task.task : '');
    setCompleted(task ? task.completed : '');
  }, [task]);

  const handleClick = () => {
    dispatch(updateTaskAction({
      id: id,
      task: taskName,
      completed: completed,
    }));
    navigate('/');
  }

  return (
    <div>
        <h1>Update Your Task</h1>
      <form>
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder='Enter Your Task'
          value={taskName}
          onChange={(e) => setTask(e.target.value)}
        />

        <label htmlFor="">Completed ?</label>
        <input
          type="text"
          placeholder='True Or False ?'
          value={completed}
          onChange={(e) => setCompleted(e.target.value)}
        />

        <button onClick={handleClick}>Enregistrer</button>
      </form>
    </div>
  )
}
