import axios from "axios";
import React from "react";
import "./Todo.css"
function Data({ title, time, id, item, setData, data }) {
  const deleteBtn = () => {
    axios.delete(`http://localhost:5000/products/${id}`).then((res) => {
      const deleter = data.filter((item) => item.id !== id);
    });
  };

  return (
    <div className="text">
      <h1>
        {title}/{time} 
      </h1>

      <button  onClick={deleteBtn}>X</button>
    </div>
  );
}

export default Data;
