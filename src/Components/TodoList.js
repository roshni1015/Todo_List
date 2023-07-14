import React from 'react'

const TodoList = ({todos, setTodos,setEditTodo}) => {
    const handleComplete = (todo) => {
        setTodos(
            todos.map((item)=>{
                if(item.id === todo.id){
                    return{...item, completed: !item.completed}
                }
                return item;
            })
        );
    };

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo)

    }
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo)=> todo.id !== id))

    }
    return(
        <div>
          {todos.map((todo)=> (
            <li className='list-item' key={(todo.id)}>
                <input type='text'
                       value={todo.title}
                       className={`list ${todo.completed? "Complete" : ""}`}
                       onChange={(event)=> event.preventDefault()}
                       />
                       <div>
                        <button className='button-complete task-button'>
                            <i className='fa fa-check-circle' onClick={()=>handleComplete(todo)}></i>
                        </button>
                        <button className='button-edit'>
                            <i className='fa fa-edit'onClick={()=>{handleEdit(todo)}}></i>
                        </button>
                        <button className='button-delete task-button' onClick={()=>handleDelete(todo)}>
                            <i className='fa fa-trash'></i>
                        </button>
                       </div>
            </li>
          ))}
        </div>
    )

}

export default TodoList;
