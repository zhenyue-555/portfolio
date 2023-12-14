import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import TaskInputGroup from './TaskInputGroup/TaskInputGroup';

function SubTaskItem({ subtask, taskId, toggleSubtaskCompletion, deleteSubtask, toggleChildTaskVisibility }) {
  return (
    <ListGroup.Item key={subtask.id} className="sub-task d-flex justify-content-between align-items-center">
      <TaskInputGroup
        className="subtask-group"
        completed={subtask.completed}
        onChange={() => toggleSubtaskCompletion(taskId, subtask.id)}
        text={subtask.text}
      />
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toggleChildTaskVisibility(taskId, subtask.id)}
      >
        ChildTasks
      </Button>
      <Button variant="danger" size="sm" onClick={() => deleteSubtask(taskId, subtask.id)}>DeleteS</Button>
    </ListGroup.Item>
  );
}

export default SubTaskItem;
