import { useState } from "react";

import styles from "./Todo.module.scss"
import Button from "../Buttons";

let uniqId = -1;

function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [edited, setEdited] = useState(false);
    const [editId, setEditId] = useState();

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Lấy giá trị từ input
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn trang reload khi submit form
        if (inputValue.trim()) {
            if (!edited) {
                setTodos([...todos, { id: ++uniqId, text: inputValue, completed: false }]);
                setInputValue(''); // Reset input sau khi thêm
            } else {
                handleEditTodo(editId);
                setInputValue(''); // Reset input sau khi thêm
            }
        }
    };

    const handleCheckedTodo = (id) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    }

    const handleDeleteTodo = (id) => {
        const isConfirm = confirm('Bạn có muốn xóa công việc này không !')
        if (isConfirm) {
            const newTodos = todos.filter(todo => todo.id !== id)
            setTodos(newTodos)
        }
    }

    const handleEditTodo = (id) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, text: inputValue } : todo
        );
        setTodos(newTodos);
        setEdited(false);
        setEditId(null);
    }

    return (
        <div className={styles.app}>
            <form onSubmit={handleSubmit}>
                <input
                    className={styles['input-todo']}
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập task mới..."
                />
                <Button type="submit">
                    {edited ? 'Sửa' : 'Thêm'}
                </Button>
            </form>

            <div className={styles['task-wrapper']}>
                <div className={styles['task-list']}>
                    {todos.map((todo) => (
                        <div
                            className={`${styles['task-item']} ${todo.completed ? styles.completed : ""}`}
                            style={{ display: 'flex' }}
                            key={todo.id}>
                            <div className={styles['task-item--first']}>
                                <div className={styles['btn--align-center']}>
                                    <div onClick={() => handleCheckedTodo(todo.id)}>
                                        {todo.completed ?
                                            <i className="fa-solid fa-square-check"></i> :
                                            <i className="fa-regular fa-square"></i>
                                        }
                                    </div>
                                </div>

                                <p className={styles['task-item__text']}>{todo.text}</p>
                            </div>

                            <div className={styles['task-item--control']}>
                                <div
                                    onClick={() => {
                                        setInputValue(todo.text);
                                        setEditId(todo.id)
                                        setEdited(!edited)
                                    }}
                                >
                                    <i className="fa-solid fa-pen-to-square"></i>
                                </div>

                                <div
                                    onClick={() => handleDeleteTodo(todo.id)}
                                >
                                    <i className="fa-solid fa-trash"></i>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default Todo;