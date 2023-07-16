import { useState } from "react";

const Sort = ({  }) => {
    const [sort, setsort] = useState("all")

    
    return (
        <div>
            <select id="sort" value={sort} onChange={(e)=>{setsort(e.target.value)}}>

                <option value={"all"}>All</option>
                <option value={"men"}>Men</option>
                <option value={"women"}>Women</option>
            </select>


        </div>
    );

}
export default Sort;
