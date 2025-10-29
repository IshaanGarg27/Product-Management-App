import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav className="navbar navbar-dark bg-dark p-3">
        <Link to="/" className="navbar-brand">Product App</Link>
        <Link to="/add" className="navbar-brand">Add Product</Link>
      </nav>

    <div className="container mt-3">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<AddProduct />} />
      </Routes>
    </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
