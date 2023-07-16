import axios from "axios";
import { Fragment, useEffect, useState, } from "react";


export default function Api() {
    const [show, setShow] = useState(false)
    const [length, setLength] = useState();
    const [data, setData] = useState([]);
    useEffect(() => {
        const cardsData = async () => {
            const response = await axios.get("https://jsonplaceholder.typicode.com/photos")
            response.data.length = 8
            setData(response.data)
        }
        cardsData()
    }, [])
    // console.log(data


    const finalCards = data.map((el) => {
        return (
            <div
                className="card " key={el.id} style={{ width: "18rem" }} style={{display:show?"block":"none"}}>
                <img src={el.url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{el.title}</p>
                </div>
            </div>
        );
    })
    // console.log(show)



    return (
        <Fragment>
            <h1 className="fw-bold fs-1 text-center my-5"> photo api</h1>
            <h1 className="fw-bold fs-1 text-center my-5"> ( {data.length} )</h1>
            <div className="d-flex justify-content-center"><button className="b" onClick={()=>{setShow(!show)}} >show</button></div>
            <div className="container d-flex justify-content-around flex-wrap api-conten"
                
            
            >
                {finalCards}
            </div>
        </Fragment>
    );
}