import { useState } from "react";
export default function Filter({filteration}){

    const[filter,setFilter]=useState("");
    const filterHandeler =(e)=>{
        setFilter(e.target.value)
        filteration(e.target.value)
    }
    return(
        
        <div>
        <input className="search" type="text" placeholder="state" value={filter} onChange={filterHandeler} /> 
        </div>
    );
    }