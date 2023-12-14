import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import TaskInputGroup from './TaskInputGroup/TaskInputGroup';

function ChildTaskItem({ childTask, taskId, subtaskId, childIndex, toggleChildTaskCompletion, deleteChildTask }) {
  return (
    <ListGroup.Item key={childTask.id} className="child-task d-flex justify-content-between align-items-center">
      <TaskInputGroup
        className="childtask-group"
        completed={childTask.completed}
        onChange={() => toggleChildTaskCompletion(taskId, subtaskId, childIndex)}
        text={childTask.text}
      />
      <Button variant="danger" size="sm" onClick={() => deleteChildTask(taskId, subtaskId, childIndex)}>DeleteC</Button>
    </ListGroup.Item>
  );
}

export default ChildTaskItem;
