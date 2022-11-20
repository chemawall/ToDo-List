import React, {useState} from "react";

const Tarea = (props) =>{

    const [estado,setEstado] = useState("off")

    const change = () =>{
            setEstado("on")
    }    
    const change2 = ()=>{
            setEstado("off")
    }
    const deleteTodo = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList)
        setPendientes(list.length -1)   
   
       }

    return (
        <>
            <div onMouseOver={()=>change(todo.id)} onMouseLeave={change2}>
            <div className="ca" key={todo.id}>{todo.todo}</div>
            <div onClick={()=>deleteTodo(todo.id)} className={estado}>x</div>
            </div>
            </>
    )
}

export default Tarea

