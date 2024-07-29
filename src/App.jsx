import { useState } from 'react'
import AddTodo from './Components/AddTodo';
import TodoItems from './Components/TodoItems';
import AppName from './Components/AppName';
import WelcomeMessage from './Components/WelcomeMessage';
import './App.css'

function App() {
  const [todoItems, setTodoItems] = useState([])
  const handleNewItem = (itemName, itemRole, itemSalary) =>{
    console.log(`New Item Added: ${itemName} Role: ${itemRole} Salary: ${itemSalary}`);
    const newTodoItems = [
      ...todoItems,
      {name: itemName, Role: itemRole, Salary: itemSalary},
    ];
    setTodoItems(newTodoItems);
  };
  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter((item)=>item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return(
    <center className='todo-container'>
      <AppName></AppName>
  <AddTodo onNewItem={handleNewItem}/>
  {todoItems.length=== 0 && <WelcomeMessage/>}
  <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
  </center>
  );
  }


export default App;
