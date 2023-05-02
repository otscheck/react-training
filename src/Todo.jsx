import { useState } from "react"
import "./Todo.css"
import TodoHeader from "./TodoHeader"
import TodoList from "./TodoList";

const Todo = () => {

    const [todoList, setTodoList] = useState([{ id: Date.now(), title: "Allez à la salle de sport" }, { id: "123", title: "Apprendre le jeu de GO" }]);

    function addTodo(todo) {
        setTodoList([...todoList, todo])
    }

    function deleteTodo(todoId) {
        setTodoList([...todoList].filter(todo => todo.id !== todoId));
    }

    return (
        <div className='todo-container'>
            <div className='todo-card'>
                <h1>Ma todo list</h1>
                <TodoHeader addTodo={addTodo } />
                <TodoList todoList={ todoList } deleteTodo={deleteTodo} />
            </div>
        </div>
    )
}

export default Todo;