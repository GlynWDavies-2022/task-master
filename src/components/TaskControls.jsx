import { ArrowDownWideNarrow } from 'lucide-react';

const TaskControls = ({ showOnlyIncomplete, setShowOnlyIncomplete }) => {
    return (
        <div
            style={{
                alignItems: 'center',
                display: 'flex',
                gap: '10px',
                justifyContent: 'flex-end',
                marginTop: '20px',
            }}>
            <label
                style={{
                    alignItems: 'center',
                    display: 'flex',
                }}>
                <input
                    type='checkbox'
                    checked={showOnlyIncomplete}
                    onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
                    style={{ marginRight: '5px' }}
                />
                Show only incomplete
            </label>
            <button
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                }}>
                <ArrowDownWideNarrow />
            </button>
        </div>
    );
};

export default TaskControls;
