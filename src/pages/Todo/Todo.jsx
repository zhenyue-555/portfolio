import React, { useState, useEffect } from 'react';
import { database } from '../../firebase';
import { ref, push, update, remove, onValue } from 'firebase/database';
import { Container, Row, Col, Form, Button, ListGroup, InputGroup } from 'react-bootstrap';
import '../scss/Todo.scss';

function Todo() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);


    const changeText = (e) => {
        setText(e.target.value);
    };

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
    
    const removeTask = (id) => {
        remove(ref(database, `todos/${id}`));
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
                    {tasks.map((task) => (
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
                            <div className="task-actions">
                                <Button variant="danger" size="sm" onClick={() => removeTask(task.id)}>Remove</Button>
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
