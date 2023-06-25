/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import TodoHijo from '../todoHijo/TodoHijo';


export default function Todolist({tarea, handleSetComplete, handleDelete}) {
return (
    <div>
        {
            tarea.map((todo, index) =>(
                <TodoHijo
                key={index}
                todo= {todo}
                handleSetComplete={handleSetComplete}
                handleDelete ={handleDelete}/>
            ))
        }
    </div>
)
}
