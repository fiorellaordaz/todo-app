/* eslint-disable no-undef */
import {useState} from 'React';


// eslint-disable-next-line react/prop-types, no-unused-vars
export default function TodoInput({addTodo}) {
    const [todo, setTodo] = useState();

    const addOnChange = (e) =>{
        setTodo(e.currentTarget.value);
    };

    const addSubmit = (e) => {
        e.preventDefault();
        if(todo.trim() !== ""){
            addTodo(todo);
            setTodo("");
        }
    }
  return (
    <div className="mt-6 relative my-3">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="border border-yellow-500 border-solid p-3 rounded-full"></span>
        </div>
        <form onSubmit={addSubmit}>
        <input 
        className="pl-12 w-full py-4 bg-gray-200 rounded-xl  outline-none ease-in-out"
        type="text"
        placeholder="Agregar tarea.."
        value={todo}
        onChange={addOnChange}
        />
        </form>
        
    </div>
  )
}
