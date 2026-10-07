import { useState } from 'react';

import './App.css';

import TaskControls from './components/TaskControls';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Buy groceries',
            priority: 2,
            done: false,
        },
        {
            id: 2,
            text: 'Take a walk',
            priority: 1,
            done: false,
        },
        {
            id: 3,
            text: 'Read a book',
            priority: 3,
            done: true,
        },
    ]);

    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

    const sortTasks = () => {
        const sortedTasks = [...tasks].sort((a, b) => a.priority - b.priority);
        setTasks(sortedTasks);
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
            <TaskForm />
            <TaskControls
                showOnlyIncomplete={showOnlyIncomplete}
                setShowOnlyIncomplete={setShowOnlyIncomplete}
                sortTasks={sortTasks}
            />
            <TaskList tasks={tasks} showOnlyIncomplete={showOnlyIncomplete} />
        </div>
    );
}

export default App;
