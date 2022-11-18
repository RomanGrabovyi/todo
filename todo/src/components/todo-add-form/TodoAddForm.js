import { useState } from 'react'
import '../todo-add-form/TodoAddForm.scss'

const TodoAddForm = ({onAddTodoItem}) => {

    const [todo, setTodo] = useState({name: '', completed: ''})
    

    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            ...todo, id: Date.now()
        }
        onAddTodoItem(newTodo);
        setTodo({name: ''})
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            addTodo(e)
        }
    }

    return(
            <form className='d-flex justify-content-center'>
                <div className="mb-3 ">                  
                    <input type="text" 
                    className="form-control" 
                    value={todo.name} 
                    onChange={e => setTodo({...todo, name: e.target.value})}
                    onKeyDown={handleKeyPress}
                    placeholder='Add todo...'
                    />                  
                </div>
                <button type="submit" className="btn btn-primary" onClick={addTodo}>Submit</button>
            </form>
    )
}

export default TodoAddForm;