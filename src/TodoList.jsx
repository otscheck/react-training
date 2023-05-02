/* eslint-disable react/prop-types */
import "./TodoList.css";

// eslint-disable-next-line react/prop-types
const TodoList = ({todoList, deleteTodo}) => {
  return (
    <div className='todo-list-container'>
        {
              todoList.map(todo => <div key={todo.id} className='todo-item'>
                  <p>{todo.title}</p>
                  <p onClick={()=>deleteTodo(todo.id)} className="todo-del" >Supprimer</p>
            </div>)      
        }
    </div>
  )
}

export default TodoList