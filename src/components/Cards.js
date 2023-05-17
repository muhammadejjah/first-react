import { Fragment } from "react";

export default function Cards() {
    const users=[{name:"muhammad",num : +963988417907 , loaction:"damascus" },{name:"ali",num : +963584532585 , loaction:"aleppo" },{name:"ahmad",num : +96397784621125 , loaction:"damaschomsus" },{name:"ahmad",num : +96397784621125 , loaction:"damaschomsus" }];
    
    return (
        <Fragment>
        
        <div className="card-container">
            {users.map((el)=><div className="card"><h1>{el.name}</h1> <h3>{el.num}</h3><h5>{el.loaction}</h5></div>)}
        

        </div>

        </Fragment>
    );
}
