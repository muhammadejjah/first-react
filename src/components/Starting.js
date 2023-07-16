import { Fragment } from "react";
const Starting = () => {
    const uname = "muhammad";
    const userNames = ["muhammad", "ali", "mahmpood"];
    return (
        <Fragment >
            <p >
                {uname === "muhammad" ? "hello muhammad" : "hello there"}
            </p>
            <div>
                names:{userNames.map((el,i) => <p key={i}>{el}</p>)}
            </div>
        </Fragment>
    );
}
export default Starting;
