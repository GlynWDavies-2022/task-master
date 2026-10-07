import { Trash, Pencil } from 'lucide-react';

const TaskItem = ({ task }) => {
    return (
        <>
            <div
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                }}>
                <input type='checkbox' checked={task.done} style={{ marginRight: '10px' }} />
                <span
                    style={{
                        alignItems: 'center',
                        display: 'flex',
                        flexGrow: 1,
                        gap: '8px',
                        textDecoration: task.done ? 'line-through' : 'none',
                    }}>
                    {task.text}
                    <span
                        style={{
                            backgroundColor: '#6f42c1',
                            borderRadius: '50%',
                            color: '#fff',
                            display: 'inline-block',
                            fontSize: '12px',
                            fontWeight: 'bold',
                            padding: '4px 8px',
                            textAlign: 'center',
                        }}>
                        {task.priority}
                    </span>
                </span>
            </div>
            <div
                style={{
                    display: 'flex',
                    gap: '5px',
                }}>
                <button
                    style={{
                        border: 'none',
                        borderRadius: '50%',
                        backgroundColor: '#ffc107',
                        color: '#000',
                        cursor: 'pointer',
                        height: '40px',
                        padding: '10px',
                        width: '40px',
                    }}>
                    <Pencil size={20} />
                </button>
                <button
                    style={{
                        border: 'none',
                        borderRadius: '50%',
                        backgroundColor: '#dc3545',
                        color: '#000',
                        cursor: 'pointer',
                        height: '40px',
                        padding: '10px',
                        width: '40px',
                    }}>
                    <Trash size={20} />
                </button>
            </div>
        </>
    );
};

export default TaskItem;
