import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take shower", "Go for walk"]);
    const [newTasks, setNewTasks] = useState("");

    function handleInputChange(event) {
        setNewTasks(event.target.value);
    }

    function addTask() {
        if (newTasks.trim() !== "") {
            setTasks(t => [...t, newTasks]);
            setNewTasks("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='todo'>
            <h1>To-Do-List 🎯</h1>
            <div>
                <input type="text" placeholder='Enter a task... 🖋' value={newTasks} onChange={handleInputChange} />
                <button className='addbutton' onClick={addTask}>Add ➕</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className='text'>{task}</span>
                        <button className='delbutton' onClick={() => deleteTask(index)}>Delete</button>
                        <button className='movebutton' onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button className='movebutton' onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;


