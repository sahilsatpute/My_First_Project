function TodoItem({todoName, todoRole, todoSalary, onDeleteClick}){
  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-4">{todoName}</div>
        <div className="col-3">{todoRole}</div>
        <div className="col-3">{todoSalary}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger my-button" onClick={()=>onDeleteClick(todoName)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem;