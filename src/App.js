
import Starting from "./components/Starting"
import Cards from "./components/Cards"
import { Fragment, useState, useRef, useEffect } from "react"
import Filter from "./components/Filter"
import Modall from "./components/Modall"
import Nav from "./components/navBar/Navbar"
import Wiki from "./components/Wiki"
import Api from "./components/Api"
import PrevData from "./components/PrevData"
import Life from "./components/Life"
import Cuonter from "./components/Performance -Optimization/Cuonter"
import ReduxCom from "./components/redux/Redux"




const App = () => {

  const [boys, setBoys] = useState(false);
  const [girls, setGirls] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [filter1, setFilter1] = useState("");
  const inputEl = useRef(null)
  const [show, setShow] = useState(false);
  const [women, setWomen] = useState([
    { id: 1111, name: "ola", num: +963988417907, loaction: "damascus", gender: "women" },
    { id: 1112, name: "nermeen", num: 963584532585, loaction: "aleppo", gender: "women" },
    { id: 1114, name: "esraa", num: +963945745125, loaction: "dair alzor", gender: "women" },
    { id: 1101, name: "enas", num: +963945745125, loaction: "damancus", gender: "women" },
    { id: 1115, name: "hala", num: +963945745125, loaction: "dair alzor", gender: "women" },
    { id: 1116, name: "haya", num: +963945745125, loaction: "latakia", gender: "women" },
    { id: 1117, name: "neven", num: +963945745125, loaction: "daraa", gender: "women" },
    { id: 1118, name: "esraa", num: +963945745125, loaction: "hasaka", gender: "women" },
    { id: 1119, name: "amal", num: +96397784621155, loaction: "homs", gender: "women" }]);


  const deleteHandeler = (e, clickedIdx) => {
    const deleteItem = women.filter((el, idx) => idx !== clickedIdx)
    console.log(deleteItem)
    localStorage.setItem("data", JSON.stringify(deleteItem))
    setWomen(deleteItem)
    // setWomen((prave) => {
    //   return prave.filter((el, idx) => idx !== clickedIdx)
    // })

  }
  function toggle() {
    setShow(!show)
  }
  const testHandeler = () => {
    console.log(inputEl.current.value)
  }
  const clickForFocus = () => {
    inputEl.current.disabled = true;
  }

  // console.log(show)
  const filterName = (n) => {
    setFilter1(n);

  }
  const namesHandeler = () => {
    if (filter1.length != 0) {
      return women.filter(el => el.name.includes(filter1))
    }
    return women
  }
  window.onload = () => {
    if (JSON.parse(localStorage.getItem("data")) === null) {
      setWomen(women)
    }
    else {
      setWomen(JSON.parse(localStorage.getItem("data")))
    }

  }
  // console.log(women)
  const addUserHandeler = (data) => {

    // console.log(data)
    women.push(data)
    // setWomen((prevState)=>setWomen([...prevState,data]))
    localStorage.setItem("data", JSON.stringify(women))

  }
  // console.log(girls)
  // console.log(boys)
  const menFilter = () => {
    setBoys(!boys)
    if (boys) {
      setWomen(women.filter(el => el.gender === "man"))
    }
    else {
      console.log()
      setWomen(JSON.parse(localStorage.getItem("data")))
      // console.log(women)
    }

  }
  const womenFilter = () => {
    setGirls(!girls)
    if (girls) {
      setWomen(women.filter(el => el.gender === "women"))
      // console.log("kkk")
    }
    else {
      console.log()
      setWomen(JSON.parse(localStorage.getItem("data")))
      // console.log("000")
    }
  }
  let sw = false;

  // const newColor=(e)=>{
  //   sw=!sw;
  //   if(sw){
  //     e.target.style.backgroundColor="#aaa";
  //   }
  //   else{
  //     e.target.style.backgroundColor="#fafa";
  //   }
  // }
  return (
    <Fragment>
      <Nav></Nav>
      <button className="sign-in" onClick={() => { setShowModal(!showModal) }}><i className="fa-solid fa-user-plus"></i> Add User</button>
      <Modall show={showModal} closeModal={() => { setShowModal(!showModal) }} data={women} addUserHandeler={addUserHandeler} />
      <h1>Users</h1>
      <button className="btn" onClick={
        toggle
      } >{show ? "show" : "hide"} </button>
      <div style={{ transition: "all 400ms" }} className={show ? "hide" : "show"}>
        <div>
          <input type="text" placeholder="ref" ref={inputEl} onChange={testHandeler} />
          <button onClick={clickForFocus}>focus</button>
        </div>
        <Filter filteration={filterName} />
        <div style={{ display: "flex", justifyContent: "space-around" }} className="filter">
          <button onClick={menFilter}>Men</button>
          <button onClick={womenFilter}>Women</button>
        </div>
        <Cards user={namesHandeler()} type="women" deletee={deleteHandeler} show={show} />
        <h1 className="text-center fw-bold fs-1">Life cycle</h1>
        <Life />
        <h1 className="text-center fw-bold fs-1">Wiki Search</h1>
        <Wiki />
        <h1 className="text-center fw-bold fs-1">Api</h1>
        <Api />
        <PrevData />
        <h1 className="text-center fw-bold fs-1">Performance Optimization</h1>
        <Cuonter />
        <h1 className="text-center fw-bold fs-1">Redux Toolkit </h1>
        <ReduxCom />

      </div>
    </Fragment >
  )

}

export default App

