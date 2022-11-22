import React, {useState} from "react";
import Task from "./task";

const Value = () =>{

            const [entrada,setEntrada]= useState("")
            const change1 = (event) => {
                setEntrada(event.target.value)
            }   
            
           
           
            const [list,setList] = useState([])
            const change2= (event) =>{
                if(event.keyCode ==13 && event.target.value !== ""){
                setList([...list, entrada])
                setEntrada("")
                setPendientes(list.length + 1)
                }

            }   
            
            const [pendientes, setPendientes] = useState(0)

return (
        <>
            <div>
                <input className="form" onChange={change1} onKeyUp={change2} placeholder="¿Qué necesitas apuntar" value={entrada} type="text"></input>
            </div>

            {list.map((item,index) => {
            return <>
            <Task key={index} list={list} setList={setList} index={index}
            setPendientes={setPendientes} item={item} />
            </>
        })}
         
        <div className="pap">{list.length === 0 ? `No tienes ninguna tarea pendiente`: `Tienes ${pendientes} tareas pendientes` }</div>
       
            </>

)
};

export default Value
