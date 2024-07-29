import { useState } from 'react'

function AddTodo({onNewItem}){
  const [todoName, setTodoName] = useState();
  const [Role, setRole] = useState();
  const [Salary, setSalary] = useState();

  const handleNameChange = (event) =>{
    setTodoName(event.target.value);
  };

  const handleRoleChange = (event) =>{
    setRole(event.target.value);
  };

  const handleSalaryChange = (event) =>{
    setSalary(event.target.value);
  };

  const handleAddButtonClicked = () =>{
    onNewItem(todoName, Role, Salary)
    setTodoName("");
    setRole("");
    setSalary("");
  };

  return(
    <div className='container text-center'>
      <div className='row my-row'>
        <div className='col-4'>
          <input type="text" placeholder='Enter Name here' value={todoName} onChange={handleNameChange}/>
        </div>

        <div className='col-3'>
          <input type="text" placeholder='Enter Role Here' value={Role} onChange={handleRoleChange}/>
        </div>

        <div className='col-3'>
          <input type="text" placeholder='Enter Salary Here' value={Salary} onChange={handleSalaryChange}/>
        </div>

        <div className='col-2'>
          <button type='button' className='btn btn-success my-button' onClick={handleAddButtonClicked}>Add</button>
        </div>

      </div>
    </div>
  );
}

export default AddTodo;
