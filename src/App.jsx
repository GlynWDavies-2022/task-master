import { useState } from 'react';

import './App.css';

import { getStoredTasks, updateLocalStorage } from './utils/localStorageUtils';

import TaskControls from './components/TaskControls';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState(getStoredTasks());

    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

    const addTask = (newTask) => {
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
    };

    const toggleTaskDone = (id) => {
        const updatedTasks = tasks.map((task) => {
            return task.id === id ? { ...task, done: !task.done } : task;
        });
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
    };

    const updateTask = ({ taskId, editText, editPriority }) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, text: editText, priority: editPriority } : task,
        );
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
    };

    const removeTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
        updateLocalStorage(updatedTasks);
    };

    const sortTasks = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
        setTasks(sortedTasks);
        updateLocalStorage(sortedTasks);
    };

    return (
        <div
            style={{
                fontFamily: 'sans-serif',
                margin: 'auto',
                maxWidth: '800px',
                padding: '20px',
            }}>
            <h2 style={{ textAlign: 'center' }}>TaskMaster</h2>
            <TaskForm addTask={addTask} />
            <TaskControls
                showOnlyIncomplete={showOnlyIncomplete}
                setShowOnlyIncomplete={setShowOnlyIncomplete}
                sortTasks={sortTasks}
            />
            <TaskList
                tasks={tasks}
                showOnlyIncomplete={showOnlyIncomplete}
                toggleTaskDone={toggleTaskDone}
                removeTask={removeTask}
                updateTask={updateTask}
            />
        </div>
    );
}

export default App;

