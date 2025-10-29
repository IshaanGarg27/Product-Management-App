import { useEffect, useState } from "react";
import axios from 'axios'

function Home() {
    
    const [products , setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/products")
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
    } , []);

    return (
        <div>
            <h2>All Products</h2>
            <ul className="list-group">
                {products.map(p => (
                    <li key={p._id} className="list-group-item">
                        {p.name} - ${p.price}
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default Home;