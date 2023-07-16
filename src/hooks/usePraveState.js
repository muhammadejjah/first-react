import { useEffect, useRef } from "react";

const usePraveState = (state) => {
    const ref = useRef();
    useEffect(() => {
        ref.current=state
    })
    return ref.current;

}
export default usePraveState;