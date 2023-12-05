import React, { useState, useEffect } from 'react';
import { database } from '../../firebase';
import { ref, push, update, remove, onValue } from 'firebase/database';
import { Container, Row, Col, Form, Button, ListGroup, InputGroup, Collapse, ListGroupItem } from 'react-bootstrap';
import './Todo.scss';
// import '../scss/Todo.scss';

function Todo() {
    const [taskText, setTaskText] = useState("");
    const [subtaskText, setSubtaskText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [openComments, setOpenComments] = useState({});
    const [openSubtasks, setOpenSubtasks] = useState({});

    const toggleComment = (id) => {
        setOpenComments(prevOpenComments => ({
            ...prevOpenComments,
            [id]: !prevOpenComments[id]
        }));
    };

    const toggleSubtaskVisibility = (taskId) => {
        setOpenSubtasks(prevOpenSubtasks => ({
            ...prevOpenSubtasks,
            [taskId]: !prevOpenSubtasks[taskId]
        }));
    };

    const addSubtask = (taskId, subtaskText) => {
        const newSubtask = { text: subtaskText, completed: false };
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                const newSubtasks = task.subtasks ? [...task.subtasks, newSubtask] : [newSubtask];
                return { ...task, subtasks: newSubtasks };
            }
            return task;
        });
        setTasks(updatedTasks);
        
        const taskToUpdate = tasks.find(task => task.id === taskId);
        update(ref(database, `todos/${taskId}`), { ...taskToUpdate, subtasks: taskToUpdate.subtasks ? [...taskToUpdate.subtasks, newSubtask] : [newSubtask] });
        setSubtaskText("");
    };


    
    const handleCommentChange = (id, newComment) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, comment: newComment };
            }
            return task;
        });
        setTasks(updatedTasks);
        update(ref(database, `todos/${id}`), { comment: newComment });
    };


    // const changeText = (e) => {
    //     setText(e.target.value);
    // };

    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = { text, completed: false };
        push(ref(database, 'todos'), newTask);
        setText("");
    };

    const toggleTaskCompletion = (id) => {
        const task = tasks.find(task => task.id === id);
        update(ref(database, `todos/${id}`), { completed: !task.completed });
    };
    
    const toggleSubtaskCompletion = (taskId, subtaskIndex) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                const newSubtasks = task.subtasks.map((subtask, index) => {
                    if (index === subtaskIndex) {
                        return { ...subtask, completed: !subtask.completed };
                    }
                    return subtask;
                });
                return { ...task, subtasks: newSubtasks };
            }
            return task;
        });
        setTasks(updatedTasks);

        const taskToUpdate = updatedTasks.find(task => task.id === taskId);
        update(ref(database, `todos/${taskId}`), { ...taskToUpdate });
    };
    
    const removeTask = (id) => {
        remove(ref(database, `todos/${id}`));
    };

    const deleteSubtask = (taskId, subtaskIndex) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                const newSubtasks = task.subtasks.filter((_, index) => index !== subtaskIndex);
                return { ...task, subtasks: newSubtasks };
            }
            return task;
        });
        setTasks(updatedTasks);

        const taskToUpdate = updatedTasks.find(task => task.id === taskId);
        update(ref(database, `todos/${taskId}`), { ...taskToUpdate });
    };
    
    useEffect(() => {
        const todoRef = ref(database, 'todos');
        onValue(todoRef, (snapshot) => {
            const todosFirebase = snapshot.val();
            const todoList = [];
            for (let id in todosFirebase) {
                todoList.push({ id, ...todosFirebase[id] });
            }
            setTasks(todoList);
        });

    }, []);

    return (
        <Container className="todo-container my-4">
            <Row className="todo-row justify-content-center align-items-center">
                <Col xs={12} md={8} className="shadow p-3 bg-white">
                    <h5 className="text-center text-primary">Todo List</h5>
                    <Form onSubmit={(e) => { e.preventDefault(); setTaskText(""); }}>
                        <Row className="align-items-center">
                            <Col xs={9}>
                                <Form.Control
                                    type="text"
                                    value={taskText}
                                    onChange={(e) => setTaskText(e.target.value)}
                                    placeholder="Add a new task"
                                />
                            </Col>
                            <Col xs={3}>
                                <Button type="submit" variant="primary" size="sm">Add Todo</Button>
                            </Col>
                        </Row>
                    </Form>

                    <ListGroup className="mt-3">
                    {tasks.map((task) => (
                        <>
                        <ListGroup.Item key={task.id} className="todo-item d-flex justify-content-between align-items-center">
                            <InputGroup className="flex-grow-1">
                                <InputGroup.Checkbox
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                />
                                <div className="task-text-container">
                                    <div className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                        {task.text}
                                    </div>
                                </div>
                            </InputGroup>
                            <div className="button-group">
                            <div className="task-actions">
                                <Button variant="danger" size="sm" onClick={() => removeTask(task.id)}>Remove</Button>
                            </div>
                            <div className="task-actions">
                            <Button 
                                    size="sm"
                                    onClick={() => toggleComment(task.id)}
                                    aria-controls={`comment-collapse-${task.id}`}
                                    aria-expanded={openComments[task.id]}
                                >
                                    comment
                            </Button>
                            </div>
                            <div className="task-actions">
                                <Button
                                    size="sm"
                                    variant='info'
                                    onClick={() => toggleSubtaskVisibility(task.id)}
                                    aria-controls={`subtask-collapse-${task.id}`}
                                    aria-expanded={openSubtasks[task.id]}
                                >
                                    Subtask
                                </Button>
                            </div>
                            </div>
                        </ListGroup.Item>
                        <Collapse in={openComments[task.id]}>
                            <div id={`comment-collapse-${task.id}`} className="todo-comment">
                                <Form.Control
                                    as="textarea"
                                    value={task.comment || ''}
                                    onChange={(e) => handleCommentChange(task.id, e.target.value)}
                                    placeholder="Add a comment"
                                />
                            </div>
                        </Collapse>
                        <Collapse in={openSubtasks[task.id]}>
                                    <div id={`subtask-collapse-${task.id}`}>
                                    <ListGroup>
                                    {task.subtasks && task.subtasks.map((subtask, index) => (
                                        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                            <InputGroup className="flex-grow-1">
                                                <InputGroup.Checkbox
                                                    checked={subtask.completed}
                                                    onChange={() => toggleSubtaskCompletion(task.id, index)}
                                                />
                                                <div className="task-text-container">
                                                    <div className="task-text" style={{ textDecoration: subtask.completed ? 'line-through' : 'none' }}>
                                                        {subtask.text}
                                                    </div>
                                                </div>
                                            </InputGroup>
                                            <Button variant="danger" size="sm" onClick={() => deleteSubtask(task.id, index)}>Delete</Button>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                        <Form onSubmit={(e) => { e.preventDefault(); addSubtask(task.id, subtaskText); }}>
                                            <InputGroup>
                                                <Form.Control
                                                    type="text"
                                                    value={subtaskText}
                                                    onChange={(e) => setSubtaskText(e.target.value)}
                                                    placeholder="Add a new subtask"
                                                />
                                                <Button type="submit" variant="primary" size="sm">Add</Button>
                                            </InputGroup>
                                        </Form>
                                    </div>
                                </Collapse>
                        </>
                    ))}
            </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Todo;