import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:5000/api/products" , {name , price})
    .then(() => navigate('/'))
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Name"
          className="form-control mb-2"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Price"
          className="form-control mb-2"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
