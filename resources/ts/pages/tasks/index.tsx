import React, { useState, useEffect } from 'react';
import '../../../sass/app.scss';
import axios from 'axios';

type TaskType = {
    id: number
    title: string
    done: boolean
}

const initialState: TaskType[] = []

const Task: React.FC = () => {

    const [tasks, setTasks] = useState(initialState)
    const [inputTitle, setInputTitle] = useState('')

    const getTasks = () => {
        axios.get("/api/task/read").then((res) => {
            setTasks(res.data);
        });
    }

    const handleSubmit = () => {
        const newTask: TaskType = {
            id: 0,
            title: inputTitle,
            done: false,
        }
        axios.post("/api/task/create", newTask).then((res) => {
            getTasks()
            setInputTitle('')
        });
    }

    const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const taskUpdate = (task: TaskType) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id ? { ...task, done: !task.done } : t
        ))
        axios.put("/api/task/update/", task).then((res) => {
            console.log(res.data);
            // getTasks()
        });
    }

    const deleteTask = (task: TaskType) => {
        axios.delete("/api/task/delete/" + task.id).then((res) => {
            getTasks()
        });
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div>
            <div className="inner">
                <input value={inputTitle} onChange={InputChange} type="text" />
                <button onClick={handleSubmit}>追加</button>
            </div>
            <hr />
            <div className="inner">
                {
                    <ul className="task-list">
                        {tasks.map((task, index) => (
                            <li className={task.done ? 'done' : ''} key={index.toString()}>
                                <label>
                                    <input type="checkbox" onChange={(e) => { taskUpdate(task) }} defaultChecked={task.done} />
                                    <span>{task.title}</span>
                                    <button onClick={() => deleteTask(task)}>削除</button>
                                </label>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </div>
    );
}


export default Task;