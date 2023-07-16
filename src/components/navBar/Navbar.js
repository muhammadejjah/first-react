import { Fragment } from "react";
import { useSelector } from "react-redux";


export default function Nav() {
    const state = useSelector((state)=>state)
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="">Cart</a>
                            <a className="nav-link" href="#">Pricing</a>
                            <a className="nav-link disabled">Disabled</a>
                            <a className="nav-link ">{state.value}</a>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>

    );
} 