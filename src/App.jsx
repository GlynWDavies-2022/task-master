import { useEffect, useReducer, useState } from 'react';

import './App.css';

import { getStoredTasks, updateLocalStorage } from './utils/localStorageUtils';
import { taskReducer } from './reducers/taskReducer';

import TaskControls from './components/TaskControls';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, undefined, getStoredTasks);

    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

    useEffect(() => {
        updateLocalStorage(tasks);
    }, [tasks]);

    const addTask = (newTask) => {
        dispatch({ type: 'ADD', payload: newTask });
    };

    const toggleTaskDone = (id) => {
        dispatch({ type: 'TOGGLE_DONE', payload: id });
    };

    const updateTask = ({ taskId, editText, editPriority }) => {
        dispatch({ type: 'UPDATE', payload: { taskId, editText, editPriority } });
    };

    const removeTask = (id) => {
        dispatch({ type: 'REMOVE', payload: id });
    };

    const sortTasks = () => {
        dispatch({ type: 'SORT' });
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

