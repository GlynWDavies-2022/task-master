import ListItem from './TaskItem';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, showOnlyIncomplete }) => {
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
                        <TaskItem task={task} />
                    </li>
                ))}
        </ul>
    );
};

export default TaskList;
