import React, { useState } from "react";
import Tarea from "./tareaprimera";


const Input = () => {

      
    const [input,setInput] = useState()
    const [list,setList] = useState([])
    const [pendientes, setPendientes] = useState(0)
    

    const firstElement = (event) => {        
            setInput(event.target.value)                         
    }
   
    const addNew = (todo) => {
        
        const newTodo = {
            todo: todo,
            id: Math.random()
        }
        if(event.keyCode ==13){
            setList([...list,newTodo]); 
            setInput("")
            setPendientes(list.length +1)    
        }       
    }
    const deleteTodo = (id) => {
     const newList = list.filter((todo) => todo.id !== id);
     setList(newList)
     setPendientes(list.length -1)   

    }
    const [estado,setEstado] = useState("off")

    const change = (todo,id) =>{ 
        
        setEstado(todo.id === id ? "on" :"off")
    }

    
   const change2 = ()=>
   { setEstado("off")}

  
    
      
    return (
       <div className="container">        
            <input className="form" type="text" value={input} name="search" onChange={firstElement} placeholder="¿Qué tareas necesitas apuntar?" onKeyUp={() => addNew(input)}/>        
              
        {
        list.map((todo) => {
            return <>
            <Tarea key={} />
            </>
            
        })
    }
       
        
        <p>{pendientes} items left</p> 
     </div>
       
        
    )
};

/* 

  
*/
export default Input