import './App.css';

import TaskControls from './components/TaskControls';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
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
            <TaskControls />
            <TaskList />
        </div>
    );
}

export default App;

