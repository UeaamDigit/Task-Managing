import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteTaskAction } from '../store/actions';
import '../App.css'
export default function TaskList() {
    const tasks = useSelector((state) => state.tasks);
    const dispatch =useDispatch() ;
    const handleDelete = (id) =>{
        dispatch(deleteTaskAction(id))
    }
    return (
        <div>
            <p>
                <Link to='/add-task'>
                    <h1>Add Task</h1>
                </Link>
            </p>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Task</td>
                        <td>Completed</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t) => (
                        <tr key={t.id}>
                            <td>{t.id}</td>
                            <td>{t.task}</td>
                            <td>{t.completed.toString()}</td>
                            <td>
                                <Link to={`/update-task/${t.id}`}>
                                    <button className='bt1'>Edit</button>
                                </Link>
                                <button className='bt2' onClick={()=> handleDelete(t.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
