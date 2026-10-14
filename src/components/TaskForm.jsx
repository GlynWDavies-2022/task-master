import { useState } from 'react';

import { Plus } from 'lucide-react';

const TaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');
    const [newPriority, setNewPriority] = useState(1);

    const inputStyle = {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '8px',
    };

    const handleSubmit = () => {
        // Check that the input isn't just whitespace
        if (newTask.trim()) {
            // Call the addTask function we got from App
            // Pass a new task object to it
            addTask({
                id: Date.now(),
                text: newTask,
                priority: newPriority,
                done: false,
            });
            // Clear the input fields after submission
            setNewTask('');
            setNewPriority(1);
        }
    };

    return (
        <>
            <div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <div>
                        <input
                            type='text'
                            placeholder='Enter new task'
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            style={{ ...inputStyle, flexGrow: 1 }}
                        />
                        <input
                            type='number'
                            min='1'
                            value={newPriority}
                            onChange={(e) => setNewPriority(Number(e.target.value))}
                            style={{ ...inputStyle, width: '3.75rem' }}
                        />
                    </div>
                </div>
            </div>
            <button
                onClick={handleSubmit}
                style={{
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '50%',
                    color: 'white',
                    cursor: 'pointer',
                    display: 'block',
                    margin: '20px auto 0',
                    padding: '4px 7px',
                }}>
                <Plus size={32} />
            </button>
        </>
    );
};

export default TaskForm;
