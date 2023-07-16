import { Fragment, useEffect, useRef, useState } from "react";
import usePraveState from "../hooks/usePraveState";

export default function PrevData (){

    const[term,setTerm]=useState("javascript"); 
    const praveTerm= usePraveState(term);
    return(
        <div >
        <h1 className="text-center my-4 fs-1 fw-bold">prev data</h1>
        <div className="d-flex justify-content-center r flex-column">
         <input type="text" value={term} onChange={(e)=>{setTerm(e.target.value)}}/>
         <p>state :{term} </p>
         <p onClick={()=>{setTerm(praveTerm)}}> prev state : {praveTerm}</p>
        </div>
        
        </div>
    );
}