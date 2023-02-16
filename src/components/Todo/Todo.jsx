import axios from "axios";
import React, { useEffect, useState } from "react";
import Data from "./Data";
import "./Todo.css";
function Todo() {
  
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");


  const sendData = () => {
    const info = { title:title,time:time};
    axios.post("http://localhost:5000/products", info)
    .then(res=>{
      setData([...data,res.data])
    }
    )
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="mom">
<h1>To-Do List</h1>

      <input  onChange={e=>setTitle(e.target.value)} type="text" placeholder="name" />
      <input onChange={e=>setTime(e.target.value)} type="text" placeholder="time" />
   
      <button className="add" onClick={sendData}>ADD</button>
      {data.map((item, index) => (
        <Data key={item.id} item={item} setData={setData} data={data} {...item}/>
      ))} 
      
    </div>
  );
}

export default Todo;
