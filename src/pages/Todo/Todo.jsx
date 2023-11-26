import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
import  '../scss/Todo.scss';

const getLocalItem = () => {
    let list = localStorage.getItem('lists');
    if (list) {
        return JSON.parse(list);
    } else {
        return [];
    }
};

function Todo() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState(getLocalItem());

    const changeText = (e) => {
        setText(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = { text, completed: false };
        setTasks([...tasks, newTask]);
        setText("");
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, idx) => {
            if (idx === index) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, idx) => idx !== index);
        setTasks(updatedTasks);
    };

    const toggleComments = (index) => {
        const updatedTasks = tasks.map((task, idx) => {
            if (idx === index) {
                return { ...task, showComments: !task.showComments };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    const addComment = (index, comment) => {
        const updatedTasks = tasks.map((task, idx) => {
            if (idx === index) {
                return { ...task, comments: [...task.comments, comment] };
            }
            return task;
        });
        setTasks(updatedTasks);
    };

    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <Container className="todo-container my-4">
            <Row className="todo-row justify-content-center align-items-center">
                <Col xs={12} md={8} className="shadow p-3 bg-white">
                    <h5 className="text-center text-primary">Todo List</h5>
                    <Form onSubmit={submitHandler}>
                        <Row className="align-items-center">
                            <Col xs={9}>
                                <Form.Control
                                    type="text"
                                    value={text}
                                    onChange={changeText}
                                    placeholder="Add a new task"
                                />
                            </Col>
                            <Col xs={3}>
                                <Button type="submit" variant="primary" size="sm">Add Todo</Button>
                            </Col>
                        </Row>
                    </Form>

                    <ListGroup className="mt-3">
                {tasks.map((task, index) => (
                    <ListGroup.Item key={index} className="todo-item d-flex justify-content-between align-items-center">
                        <InputGroup className="flex-grow-1">
                            <InputGroup.Checkbox
                                checked={task.completed}
                                onChange={() => toggleTaskCompletion(index)}
                            />
                            <div className="task-text-container">
                                {/* <FormControl
                                    className="task-text"
                                    style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                                    value={task.text}
                                    readOnly
                                /> */}
                                <div className="task-text" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                    {task.text}
                                </div>

                            </div>
                        </InputGroup>
                        <div className="task-actions">
                            <Button variant="danger" size="sm" onClick={() => removeTask(index)}>Remove</Button>
                        </div>
                        
                    </ListGroup.Item>
                ))}
            </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default Todo;
