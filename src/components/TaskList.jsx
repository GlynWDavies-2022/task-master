import TaskItem from './TaskItem';

const TaskList = ({ tasks, showOnlyIncomplete, toggleTaskDone }) => {
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
                        <TaskItem task={task} toggleTaskDone={toggleTaskDone} />
                    </li>
                ))}
        </ul>
    );
};

export default TaskList;
