/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./TodoHeader.css";

const TodoHeader = ({ addTodo }) => {
    const inputRef = useRef();

    function handleClick() {
        const todo = {
            id: Date.now(),
            title: inputRef.current.value
        }
        if (inputRef.current.value !== "") {
            addTodo(todo);
            inputRef.current.value = "";
            return;
        }
        alert("le champ est vide mon cher !")
    }

  return (
    <div className="add-input">
        <div>
          <input type="text" className='input-field' placeholder='Ajouter un nouveau point' ref={inputRef} />     
        </div>
        <button onClick={handleClick} className='btn'>Ajouter ! </button>
    </div>
  )
}

export default TodoHeader