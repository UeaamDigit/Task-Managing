import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addTaskAction } from '../store/actions';
import { useNavigate } from 'react-router-dom';
import '../App.css'
export default function AddTask() {
    const count = useSelector(data=>data.tasks.length)
    const [taskName, setTask] = useState();
    const [completed, setCompleted] = useState();
    const dispatch = useDispatch() ;
    const navigate = useNavigate() ;

    const handleClick = () => {
        dispatch(addTaskAction({
            id : count+1 ,
            task: taskName ,
            completed:completed
        }))
        navigate('/') ;
    }

    return (
        <div>
            <h1>Add Your Task</h1>
            <form >
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Enter Your Task' value={taskName} onChange={(e) => setTask(e.target.value)} />

                <label htmlFor="">Completed ?</label>
                <input type="text" placeholder='True Or False ?' value={completed} onChange={(e) => setCompleted(e.target.value)} />

                <button onClick={handleClick}>Enregistrer</button>
            </form>
        </div>
    )
}
