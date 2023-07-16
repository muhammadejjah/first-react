import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
export default function ReduxCom() {
    const [count, setCount] = useState(1)
    const dispatch = useDispatch()
    const state = useSelector((state) => state)
    const plus = () => {
        const action = { type: "plus", payload: count }
        dispatch(action)
    }
    const min = () => {
        const action = { type: "min", payload: count }
        dispatch(action)
    }
    const toggle = () => {
        const action = { type: "toggle" }
        dispatch(action)
    }
    useEffect(()=>{
        dispatch({type:"plus",payload:10})
    },[dispatch])

    return (
        <div className=" d-flex justify-content-center align-items-center flex-column">
            <div style={{
                opacity: state.show ? "1" : "0",
                transition: "all 300ms"
            }}>
                <h3>counter: <span>{state.value}</span></h3>
                <div className=" w-100 d-flex align-items-center justify-content-center gap-4" >
                    <input type='number' value={count} onChange={(e) => { setCount(e.target.value) }} />
                    <button className="but" onClick={plus}>+</button>
                    <button className="but" onClick={min}>-</button>
                </div>
            </div>
            <button className="but my-4" onClick={toggle}>show/hide</button>
        </div>
    );
}