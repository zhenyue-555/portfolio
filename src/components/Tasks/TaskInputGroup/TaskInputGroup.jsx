import React from 'react';
import { InputGroup } from 'react-bootstrap';

function TaskInputGroup({ className, completed, onChange, text }) {
    const combinedClassName = `flex-grow-1 ${className || ''}`.trim();

    return (
        <InputGroup className={combinedClassName}>
            <InputGroup.Checkbox
                checked={completed}
                onChange={onChange}
            />
            <div className="task-text-container">
                <div className="task-text" style={{ textDecoration: completed ? 'line-through' : 'none' }}>
                    {text}
                </div>
            </div>
        </InputGroup>
    );
}

export default TaskInputGroup;
