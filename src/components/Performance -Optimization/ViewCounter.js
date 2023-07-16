export default function ViewCounter({num,increaseCount}){
    // console.log("view  component")
    return(
        <div className="box">
           <p>{num}</p>
           <button className="but" onClick={increaseCount}>increase</button>
        </div>
    );
}