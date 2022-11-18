import React, {useState} from 'react'

import TodoAddForm from './components/todo-add-form/TodoAddForm';
import TodoList from './components/todo-list/TodoList';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';


const App = () => {
  const [listData, setListData] = useState([
    {name: 'Do something', completed: false, id: 1},
    {name: 'Go fishing', completed: true, id: 2},
    {name: 'Read book', completed: false, id: 3}
  ]);
  

  const onAddTodoItem = (newTodo) => {
    if(newTodo) {
      setListData([...listData, newTodo])
    }  
  }
   const onRemoveTodo = (id) => {
    setListData(listData.filter((todo) => todo.id !== id))
    console.log(id)
   }
  
  return (
    <div className="App">
      <h1 className="text-align-center">Todo List: {listData.length}</h1>

      <TodoList listData={listData} onRemoveTodo={onRemoveTodo}/>
      <TodoAddForm onAddTodoItem={onAddTodoItem}/>  

    </div>
  );
}

export default App;
