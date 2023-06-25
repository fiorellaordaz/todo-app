import {useState} from 'react';
import {lista} from '../src/array/array';
import Title from './components/title';
import TodoInput from './components/todoInput';
import Todolist from './components/todolist';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [tarea, setTarea] = useState(lista); 

  const addTodo = (newTarea) => {
    let newItem = {
      id: +new Date(),
      title: newTarea,
      complete:false,
    };
    setTarea([newItem, ...tarea ])
  }

    const handleSetComplete = (id) => {
      const agregarLista = tarea.map((todo => {
        return todo.id === +id
      ?{...todo, completed: !todo.completed}
      : {...todo}
      }))
      setTarea(agregarLista);
    }

    const handleDelete = (id) => {
      const eliminar = tarea.filter(todo => todo.id !== id)
      setTarea(eliminar)
    }
  
  return (
    <div  className="bg-gray-100 min-h-screen h-full text-gray-400 flex items-center justify-center py-20  px-5 ">
      <div className="container flex flex-col max-w-xl">
        <Title/>
        <TodoInput addTodo={addTodo}/>
        <Todolist 
        tarea = {tarea}
        handleSetComplete={handleSetComplete}
        handleDelete ={handleDelete}/>

      </div>
  
    </div>
  )
}

export default App
