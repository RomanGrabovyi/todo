
import TodoListItem from "../todo-list-item/TodoListItem";

import '../todo-list/TodoList.scss'

const TodoList = ({listData, onRemoveTodo}) => {
    

    const listElem = listData.map(item => {
        const {id, ...itemProps} = item;

        return(
            <TodoListItem name={item.name}  
                          key={item.id}
                          onRemoveTodo={() => onRemoveTodo(id)}
                          {...itemProps}
                          />
        )
    })

    return (
        <ul>
            {listElem}
        </ul> 
    )
} 

export default TodoList;