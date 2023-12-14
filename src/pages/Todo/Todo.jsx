import React, { useState, useEffect } from 'react';
import { database } from '../../utils/firebase';
import { ref, push, update, remove, onValue } from 'firebase/database';
import { Container, Row, Col, Form, Button, ListGroup, InputGroup, Collapse } from 'react-bootstrap';
import './Todo.scss';
import ChildTaskItem from '../../components/Tasks/ChildTask';
import SubTaskItem from '../../components/Tasks/SubTask';
import TaskItem from '../../components/Tasks/Task';
import AddForm from '../../components/Tasks/TaskAddForm/AddForm';
// import '../scss/Todo.scss';

function Todo() {
    const [taskText, setTaskText] = useState("");
    const [subtaskText, setSubtaskText] = useState("");
    const [childText, setChildText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [openComments, setOpenComments] = useState({});
    const [openSubtasks, setOpenSubtasks] = useState({});
    const [openChildTasks, setOpenChildTasks] = useState({});

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

    const toggleChildTaskVisibility = (taskId, subtaskId) => {
        setOpenChildTasks(prevOpenChildTasks => ({
            ...prevOpenChildTasks,
            [taskId]: {
                ...prevOpenChildTasks[taskId],
                [subtaskId]: !prevOpenChildTasks[taskId]?.[subtaskId]
            }
        }));
    };

    const submitHandler = () => {
        const newTask = { text: taskText, completed: false };
        const newTaskRef = push(ref(database, 'todos'));
        newTask.id = newTaskRef.key;

        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);

        update(ref(database, `todos/${newTask.id}`), newTask);
        setTaskText("");
    };

    const addSubtask = (taskId, subtaskText) => {
        const newSubtask = { id: Date.now().toString(), text: subtaskText, completed: false };
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

    const addChildTask = (taskId, subtaskId, childTaskText) => {
        console.log("Adding child task:", taskId, subtaskId, childTaskText);
        const newChildTask = { text: childTaskText, completed: false };
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    subtasks: task.subtasks.map(subtask => {
                        if (subtask.id === subtaskId) {
                            const updatedChildTasks = subtask.childTasks ? [...subtask.childTasks, newChildTask] : [newChildTask];
                            return { ...subtask, childTasks: updatedChildTasks };
                        }
                        return subtask;
                    })
                };
            }
            return task;
        });
        setTasks(updatedTasks);

        const taskToUpdate = updatedTasks.find(task => task.id === taskId);
        if (taskToUpdate) {
            update(ref(database, `todos/${taskId}`), taskToUpdate);
        }

        setChildText("");
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
    

    const toggleTaskCompletion = (id) => {
        const task = tasks.find(task => task.id === id);
        update(ref(database, `todos/${id}`), { completed: !task.completed });
    };
    
    const toggleSubtaskCompletion = (taskId, subtaskIndex) => {
        console.log("Toggling subtask completion:", taskId, subtaskIndex);
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                console.log("Found task to update:", task);
                const newSubtasks = task.subtasks.map((subtask) => {
                    if (subtask.id === subtaskIndex) {
                        console.log("Found subtask to update:", subtask);
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

    const toggleChildTaskCompletion = (taskId, subtaskId, childTaskIndex) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    subtasks: task.subtasks.map((subtask, index) => {
                        if (subtask.id === subtaskId) {
                            return {
                                ...subtask,
                                childTasks: subtask.childTasks.map((childTask, idx) => {
                                    if (idx === childTaskIndex) {
                                        return { ...childTask, completed: !childTask.completed };
                                    }
                                    return childTask;
                                })
                            };
                        }
                        return subtask;
                    })
                };
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
                const newSubtasks = task.subtasks.filter(subtask => subtask.id !== subtaskIndex);;
                return { ...task, subtasks: newSubtasks };
            }
            return task;
        });
        setTasks(updatedTasks);

        const taskToUpdate = updatedTasks.find(task => task.id === taskId);
        update(ref(database, `todos/${taskId}`), { ...taskToUpdate });
    };

    const deleteChildTask = (taskId, subtaskId, childTaskIndex) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    subtasks: task.subtasks.map((subtask, index) => {
                        if (subtask.id === subtaskId) {
                            const filteredChildTasks = subtask.childTasks.filter((_, idx) => idx !== childTaskIndex);
                            return { ...subtask, childTasks: filteredChildTasks };
                    }
                    return subtask;
                })
            };
        }
        return task;
    }
    );
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
                    <AddForm
                        onSubmit={submitHandler}
                        text={taskText}
                        setText={setTaskText}
                        placeholder="Add a new task"
                    />
                    <ListGroup className="mt-3">
                    {tasks.map((task) => (
                        <>
                        <TaskItem
                            key={task.id}
                            task={task}
                            toggleTaskCompletion={toggleTaskCompletion}
                            removeTask={removeTask}
                            toggleComment={toggleComment}
                            toggleSubtaskVisibility={toggleSubtaskVisibility}
                            />
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
                                    {task.subtasks && task.subtasks.map((subtask)=> (
                                        <>
                                        <SubTaskItem
                                            key={subtask.id}
                                            subtask={subtask}
                                            taskId={task.id}
                                            toggleSubtaskCompletion={toggleSubtaskCompletion}
                                            deleteSubtask={deleteSubtask}
                                            toggleChildTaskVisibility={toggleChildTaskVisibility}
                                        />

                                            <Collapse in={openChildTasks[task.id]?.[subtask.id]}>
                                            <div id={`child-task-collapse-${task.id}-${subtask.id}`}>
                                                <ListGroup>
                                                {subtask.childTasks && subtask.childTasks.map((childTask, childIndex) => (
                                                    <ChildTaskItem
                                                    key={childIndex}
                                                    childTask={childTask}
                                                    taskId={task.id}
                                                    subtaskId={subtask.id}
                                                    childIndex={childIndex}
                                                    toggleChildTaskCompletion={toggleChildTaskCompletion}
                                                    deleteChildTask={deleteChildTask}
                                                    />
                                                ))}
                                                </ListGroup>
                                                <AddForm
                                                onSubmit={() => addChildTask(task.id, subtask.id, childText)}
                                                text={childText}
                                                setText={setChildText}
                                                placeholder="Add a new child task"
                                                />

                                        </div>
                                        </Collapse>
                                    </>
                                ))}
                            </ListGroup>
                            <AddForm
                                onSubmit={() => addSubtask(task.id, subtaskText)}
                                text={subtaskText}
                                setText={setSubtaskText}
                                placeholder="Add a new subtask"
                            />

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