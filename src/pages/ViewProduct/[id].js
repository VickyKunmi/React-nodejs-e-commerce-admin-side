import React, { useState, useEffect } from "react";
import "../NewProduct.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function ViewProduct() {
  const { productId } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState("");
  const [file, setFile] = useState(""); // Updated to null
  const [product_location, setProduct_location] = useState("");

  useEffect(() => {
    // Fetch product data using productId and populate the form fields
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/products/${productId}`
        );
        const productData = response.data;

        setTitle(productData.title);
        setPrice(productData.price);
        setDescription(productData.description);
        setSupplier(productData.supplier);
        setProduct_location(productData.product_location);
        setFile(productData.image);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  return (
    <div className="container">
      <Link to="/Products" className="back">
        <BiArrowBack />
      </Link>
      <h3 className="text">View product</h3>

      <div className="items">
        <div className="item">
          <div className="list">
            <label>Product Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
              placeholder="Enter Product Title"
              type="text"
              readOnly
            />
          </div>
          <div className="list">
            <label>Supplier</label>
            <input
              onChange={(e) => setSupplier(e.target.value)}
              defaultValue={supplier}
              placeholder="Enter Product Supplier "
              type="text"
              readOnly
            />
          </div>
          <div className="list">
            <label>Price (GH₵)</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              defaultValue={price}
              placeholder="Enter Product Price"
              type="text"
              readOnly
            />
          </div>
          <div className="list">
            <label>Location</label>
            <input
              onChange={(e) => setProduct_location(e.target.value)}
              defaultValue={product_location}
              placeholder="Enter Product Location"
              type="text"
              readOnly
            />
          </div>
          
        </div>
        <div className="descriptions">
          <div className="list">
            <label>Product Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={description}
              placeholder="Enter Product Description"
              type="text"
              readOnly
            />
          </div>
          <div className="list">
            <label>Image</label>
            <img src={file} alt="product"  style={{borderRadius: "10px"}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProduct;
