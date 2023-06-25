/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function TodoHijo({todo, handleSetComplete, handleDelete}) {

    const { id, title, completed} = todo

    return (
        
    <div className="flex-items-center justify-between p-3 bg-gray-200 border-b border-solid border-yellow-500 rounded-xl my-1">
        <div className="flex items-center">
            {   
                completed ? (
                    <div onClick={() => handleSetComplete(id)} className="bg-yellow-500 p-1 rounded-full cursor-pointer">
                        <img className="h-4 w-4" src='/check-icon.svg' alt='check-icon'/>
                    </div>

                ):(
                        <span onClick={() => handleSetComplete(id)} className="bg-white rounded-full p-3 cursor-pointer " ></span>
                )

            }
        <p className="pl-3">{title}</p>
        </div>
        <div className="flex justify-end ">
        <img  onClick={() => handleDelete(id)} className= "h-5 w-5 cursor-pointerlg transition-all duration-300 hover:rotate-90  ease-in"src="/close-icon.svg" alt="close-icon"/>
        </div>
    </div>
    
    )
}

