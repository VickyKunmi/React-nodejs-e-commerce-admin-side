import React, { useEffect, useState } from "react";
import "./Products.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";


function Products() {
  const [products, setProducts] = useState([]);
  // const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();
  const {user} = useAuth();


  useEffect(() => {
      fetch("http://localhost:3000/api/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
    }, [user, navigate]);

    



  const handleDelete = (productId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (shouldDelete) {
      fetch(`http://localhost:3000/api/products/${productId}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          // Remove the deleted product from the state
          setProducts(products.filter((product) => product._id !== productId));
        })
        .catch((error) => console.error("Error deleting product:", error));
    }
  };




  return (
    <div className="containers">
      <div className="addbtn">
        <Link to="/NewProduct">
          <button>Add Product</button>
        </Link>
      </div>
      <div className="Pitems">
        {products.map((product) => (
          <div className="content" key={product._id}>
            <div className="elements">
              <div className="image">
                <img src={product.image} className="img" alt="product" />
              </div>
              <h2 className="product-name">{product.title}</h2>
              <h2 className="product-supplier">{product.supplier}</h2>
              <div className="action">
                <Link to={`/ViewProduct/${product._id}`}>
                  <FcIcons.FcViewDetails className="view" />
                </Link>
                <Link to={`/EditProduct/${product._id}`}>
                  <FaIcons.FaEdit className="edit" />
                </Link>
                <button className="deletebtn" onClick={() => handleDelete(product._id)}>
                  <AiIcons.AiFillDelete className="delete" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
