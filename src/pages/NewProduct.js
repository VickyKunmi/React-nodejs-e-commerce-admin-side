import React, { useState } from "react";
import "./NewProduct.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function NewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState("");
  const [file, setFile] = useState("");
  const [product_location, setProduct_location] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  


  const handleAddProduct = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dmkqhochv/image/upload",
        data
      );
      const { url } = uploadRes.data;

      if (url) {
        const productData = {
          title,
          price,
          description,
          supplier,
          image: url,
          product_location,
        };

        try {
          const response = await axios.post(
            "http://localhost:3000/api/products/",
            productData
          );
          console.log("Product added:", response.data);
          setIsSaved(true);
          
          // Clear the input fields
          setTitle("");
          setPrice("");
          setDescription("");
          setSupplier("");
          setFile(""); 
          setProduct_location("");
          navigate("/Products")
          
        } catch (error) {
          console.error("Error adding product:", error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h3 className="text">Add new product</h3>
      {isSaved && <div className="alert">Product saved successfully!</div>}
      <div className="items">
        <div className="item">
          <div className="list">
            <label>Product Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              // value={title}
              placeholder="Enter Product Title"
              type="text"
            />
          </div>
          <div className="list">
            <label>Supplier</label>
            <input
              onChange={(e) => setSupplier(e.target.value)}
              // value={supplier}
              placeholder="Enter Product Supplier "
              type="text"
            />
          </div>
          <div className="list">
            <label>Price (GH₵)</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              // value={price}
              placeholder="Enter Product Price"
              type="text"
            />
          </div>
          <div className="list">
            <label>Location</label>
            <input
              onChange={(e) => setProduct_location(e.target.value)}
              // value={product_location}
              placeholder="Enter Product Location"
              type="text"
            />
          </div>
          <div className="list">
            <label>Image</label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              // value={image}
              placeholder="Enter Product Image"
              type="file"
            />
          </div>
        </div>
        <div className="description">
          <div className="list">
            <label>Product Description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              // value={description}
              placeholder="Enter Product Description"
              type="text"
            />
          </div>

          <hr />
          <button className="btn" onClick={handleAddProduct}>
            Add
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default NewProduct;
