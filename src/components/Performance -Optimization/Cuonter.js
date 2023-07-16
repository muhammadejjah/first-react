import { Fragment, useCallback, useMemo, useState } from "react";
import ViewText from "./ViewText";
import ViewCounter from "./ViewCounter";
const Cuonter=()=> {
    const [count, setCount] = useState(0);
    const [user,setUser]=useState({name:"muhammad"})
    const name = useMemo(()=>{
        return user
    },[user]);
    const countHandler = () => {
        setCount((prev) => prev + 1)
    }
    const ageHandler =useCallback( () => {
        setUser((prev)=>{
            return{...prev, age: 28}
        })
    },[])
    return (
        <div className="d-flex justify-content-around align-items-center ">
            <ViewCounter num={count} increaseCount={countHandler} />
            <ViewText text={name} age={ageHandler}/>
        </div>
    );
}
export default Cuonter;