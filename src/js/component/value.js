import React, {useState} from "react";
import Task from "./task";

const Value = () =>{

            const [entrada,setEntrada]= useState("")
            const change1 = () => {
                setEntrada(event.target.value)
            }   
            
           
           
            const [list,setList] = useState([])
            const change2= () =>{
                if(event.keyCode ==13 && event.target.value !== ""){
                    setList([...list, entrada])
                setEntrada("")
                }

            }   
                            

return (
        <>
            <div>
                <input onChange={change1} onKeyUp={change2} value={entrada} type="text"></input>
            </div>
            {list.map((list,index) => {
            return <>
            <Task list={list} setList={setList} index={index}/>
            </>
        })}
            </>

)
};

export default Value

/*
 <div onMouseOver={()=>change3(index)} onMouseLeave={change4}>
  */