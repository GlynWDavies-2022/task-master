import { useState } from 'react';

import { Check } from 'lucide-react';

const EditTaskForm = ({ task, setEditingTaskId, updateTask }) => {
    const [editText, setEditText] = useState(task.text);
    const [editPriority, setEditPriority] = useState(task.priority);

    const saveEdit = () => {
        if (editText.trim()) {
            // Call updateTask passed down from App
            updateTask({ taskId: task.id, editText, editPriority });
            // Update editingTaskId state to null
            // Effectively turn edit mode off because there is nothing to edit
            setEditingTaskId(null);
        }
    };

    return (
        <>
            <input
                type='text'
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    flexGrow: 1,
                    padding: '5px',
                }}
            />
            <input
                type='number'
                value={editPriority}
                onChange={(e) => setEditPriority(e.target.value)}
                min='1'
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '5px',
                    width: '50px',
                }}
            />
            <button
                onClick={saveEdit}
                style={{
                    backgroundColor: '#28a745',
                    border: 'none',
                    borderRadius: '50%',
                    color: '#fff',
                    cursor: 'pointer',
                    padding: '10px',
                }}>
                <Check size={16} />
            </button>
        </>
    );
};

export default EditTaskForm;
