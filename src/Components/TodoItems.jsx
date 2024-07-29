import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems=({ todoItems, onDeleteClick}) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item)=>(
        <TodoItem  todoSalary={item.Salary} todoRole={item.Role} todoName={item.name} onDeleteClick={onDeleteClick}/>
      ))}
    </div>
  );
};

export default TodoItems;