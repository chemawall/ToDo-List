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
        if(event.keyCode ==13){
            setList([...list,todo]); 
            setInput("")
            setPendientes(list.length +1)    
        }       
    }
    
       
      
    return (
       <div className="container">        
            <input className="form" type="text" value={input} name="search" onChange={firstElement} placeholder="¿Qué tareas necesitas apuntar?" onKeyUp={() => addNew(input)}/>        
              
        {
        list.map((todo,index) => {
            return <>
            <Tarea key={index} setList={setList} list={list}
            todo={todo} />
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