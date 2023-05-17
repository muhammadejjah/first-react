import { Fragment } from "react";


const Start = () => {
    const uname = "muhammad";
    const userNames = ["muhammad", "ali", "mahmpood"];
    return (
        <Fragment >
            <p >
                {uname === "muhammad" ? "hello muhammad" : "hello there"}
            </p>
            <div>
                names:{userNames.map((el) => <p>{el}</p>)}

            </div>
        </Fragment>
    );
}
export default Start;
