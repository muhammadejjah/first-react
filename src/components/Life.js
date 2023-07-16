import { useEffect, useState } from "react";

export default function Life() {
    const [n, sN] = useState("");
    const [p, pN] = useState("");
    let[num,setNum]=useState(0);
    useEffect(()=>{
    setNum(num+1)
    if(n){
        const timeOut=setTimeout(()=>{
        console.log(num)
        },2000)
        return ()=>{
            clearTimeout(timeOut) //clean up
        }
    }
    },[n])

    return (
        <div className="d-flex justify-content-center gap-2 flex-column align-items-center" style={{ transition: "all 300ms" }}>
            <input className="" type="text" placeholder="Name" value={n} onChange={(e) => { sN(e.target.value) }} />
            <input type="number" placeholder="Phone" value={p} onChange={(e) => { pN(e.target.value) }} />
            <p>render:({num})time{num>1?"s":""}</p>
            <p>my name : {n}</p>
            <p>my phone : {p}</p>
        </div>
    );

}