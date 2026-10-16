import { useState } from 'react';

import EditTaskForm from './EditTaskForm';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, showOnlyIncomplete, toggleTaskDone, removeTask, updateTask }) => {
    const [editingTaskId, setEditingTaskId] = useState(null);

    return (
        <ul>
            {tasks
                .filter((task) => !showOnlyIncomplete || !task.done)
                .map((task) => (
                    <li
                        key={task.id}
                        style={{
                            alignItems: 'center',
                            borderBottom: '1px solid #ccc',
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'space-between',
                            padding: '10px',
                        }}>
                        {editingTaskId === task.id ? (
                            <EditTaskForm task={task} setEditingTaskId={setEditingTaskId} updateTask={updateTask} />
                        ) : (
                            <TaskItem
                                task={task}
                                toggleTaskDone={toggleTaskDone}
                                removeTask={removeTask}
                                setEditingTaskId={setEditingTaskId}
                            />
                        )}
                    </li>
                ))}
        </ul>
    );
};

export default TaskList;
