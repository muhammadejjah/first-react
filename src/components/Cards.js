import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function Cards({ user, type, deletee }) {
    
    return (
        <div className="user-container container" >
            <div
                className="card-container">
                {user.map((el, i) =>
                    <div  className="card-user" style={{ backgroundColor: el.gender === "women" ? "#fafa" : "#aaa" }} key={i}>
                        <h1>{el.name}</h1>
                        <h3>{el.num}</h3>
                        <h5>{el.loaction}</h5>
                        <div onClick={(event) => deletee(event, i)}>x</div>
                    </div>)}
            </div>
        </div>
    );
}
