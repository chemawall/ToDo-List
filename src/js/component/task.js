import React, {useState} from "react";

const Task = (props) =>{
   
    const borrar =(index) =>{   
        const nuevaLista= props.list[filter](item => item !== props.list[props.index])
        props.setList(nuevaLista)
                  
    }             
    const [estado,setEstado] = useState("off")

    const change4 =() =>
    setEstado("on")

    const change5 =()=>
    setEstado("off")

    return (
        <>         
            <div onMouseOver={change4} onMouseLeave={change5} key={props.index}>
            <div className="ca">{props.list}</div>
            <div  className={estado} onClick={()=>borrar(props.index)}>x</div>
            </div>
        </>
            )
}

export default Task
