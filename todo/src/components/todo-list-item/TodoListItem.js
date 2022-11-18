import { useState } from 'react'

import '../todo-list-item/TodoListItem.scss'

const TodoListItem = ({name, onRemoveTodo}) => {

    const [todo, setTodo] = useState('')

    const handleChange = () => {
        setTodo({...todo, completed: !todo.completed})
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="list-item ms-2 me-auto">
                <div className="fw-bold">{name}</div>
            </div>
            <div className="remove" onClick={onRemoveTodo}>
                X
            </div>
            <input 
                type="checkbox" 
                value={todo.completed}
                onChange={handleChange}
           />
        </li>
    )
}

export default TodoListItem;