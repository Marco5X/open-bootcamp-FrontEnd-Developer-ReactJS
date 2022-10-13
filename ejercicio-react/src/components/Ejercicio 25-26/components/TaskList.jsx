import { useState } from 'react';
import { useTasks, useTasksDispatch } from './TaskContext';

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if (isEditing) {
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {
                        dispatch({
                            type: 'changed',
                            task: { ...task, text: e.target.value }
                        });
                    }} />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }
    return (
        <label>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: { ...task, completed: e.target.checked }
                    });
                }}
            />
            {taskContent}
            <button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                });
            }}>
                Delete
            </button>
        </label>
    );
}

export default function TaskList() {
    const tasks = useTasks();
    const dispatcher = useTasksDispatch();
    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Task task={task} />
                    </li>
                ))}
            </ul>
            <select style={{ backgroundColor: "gray" }} >
                <option value="Completed" onClick={() => { dispatcher({ type: "filter" })}}>
                    Completed
                </option>
                <option value="Incompleted"onClick={() => { dispatcher({ type: "filterIn" })}}>
                    Incompleted
                </option>
            </select>
        </>
    );
}