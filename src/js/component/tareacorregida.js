import React, {useState} from "react";

const Tarea = (props) =>{

    const [estado,setEstado] = useState("off")

    const change = () =>{
            setEstado("on")
    }    
    const change2 = ()=>{
            setEstado("off")
    }
    const deleteTodo = (value) => {
        const newList = props.list.filter((todo) => todo !== value);
        props.setList(newList)
         
       }

    return (
        <>
            <div onMouseOver={change} onMouseLeave={change2}>
            <div className="ca">{props.todo}</div>
            <div onClick={()=>deleteTodo(props.todo)} className={estado}>x</div>
            </div>
            </>
    )
}

export default Tarea
