import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { Fragment } from "react";
import Form from "./Layout/Controller";
const OverLay = ({ show, close, data, addUserHandeler }) => {
    const [name, setName] = useState("")
    const [num, setNum] = useState("")
    const [address, setAddress] = useState("")
    const [gender,setGender]=useState("man")
    // const [input,setInput]=useState({
    //     name:'',
    //     num:'',
    //     address:''
    // })

    const onSubmitHandeler = (e) => {
        e.preventDefault();
        // addUserHandeler(input)
        console.log(name, num, address,gender)


        addUserHandeler({
            id:Math.floor(Math.random()*999),
            name: name,
            num:num,
            loaction:address,
            gender:gender
            
        })
        

        // data.push({
        //     name: name,
        //     num: num,
        //     loaction: address
        // })
        // localStorage.setItem("data",JSON.stringify(data))
        reset()
        close()

    }


    // const inputHandler = (e)=>{
    //     const key = e.target.id;
    //     const value = e.target.value;
    //     setInput((prevState)=>{

    //         return {...prevState , [key]:value}
    //     })
    // }
    // console.log(data)
    const reset = () => {
        setAddress("")
        setName("")
        setNum("")
    }
    


    return <div className={show ? "over-lay show-overlay " : "over-lay"}>

        <form className="sign-in-form" onSubmit={onSubmitHandeler} >
            <Form.Controller>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" value={name} onChange={(e) => { setName(e.target.value) }} required/>
            </Form.Controller>
            <Form.Controller>
                <label htmlFor='num'>Number</label>
                <input type="number" id="num" value={num} onChange={(e) => { setNum(e.target.value) }} required />
            </Form.Controller>
            <Form.Controller>
                <label htmlFor='address'>Address</label>
                <input type="text" id="address" value={address} onChange={(e) => { setAddress(e.target.value) }} required />
            </Form.Controller>
            <div>
                <label htmlFor="gender"> select the gender :  </label>
                <select id="gender" value={gender} onChange={(e)=>{setGender(e.target.value)}} required>
                    <option value={"man"}>Man</option>
                    <option value={"women"}>Women</option>
                </select>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", width: "80%" }}>
                <button type="submit">Save</button>
                <button type="reset" onClick={reset}>Reset</button>
            </div>




        </form>
    </div>;
}
const BackDrop = ({ close, show }) => {

    return <div className={show ? "show back-drop" : "back-drop"} onClick={close}></div>;
}

function Modall({ show, closeModal, data, addUserHandeler }) {

    return (


        <Fragment>
            {ReactDOM.createPortal(
                <Fragment>
                    <BackDrop close={closeModal} show={show} />
                    <OverLay show={show} close={closeModal} data={data} addUserHandeler={addUserHandeler} />
                </Fragment>
                , document.getElementById('modal'))}
        </Fragment>
    );


}
export default Modall;