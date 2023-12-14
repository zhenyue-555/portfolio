import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import TaskInputGroup from './TaskInputGroup/TaskInputGroup';

function TaskItem({ task, toggleTaskCompletion, removeTask, toggleComment, toggleSubtaskVisibility }) {
  return (
    <ListGroup.Item key={task.id} className="todo-item d-flex justify-content-between align-items-center">
      <TaskInputGroup
        className="task-group"
        completed={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        text={task.text}
      />
      <div className="button-group">
        <Button variant="danger" size="sm" onClick={() => removeTask(task.id)}>Remove</Button>
        <Button size="sm" onClick={() => toggleComment(task.id)}>Comment</Button>
        <Button size="sm" variant='info' onClick={() => toggleSubtaskVisibility(task.id)}>Subtask</Button>
      </div>
    </ListGroup.Item>
  );
}

export default TaskItem;
