import React, { useState, useEffect } from "react";
import "../NewProduct.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function EditProduct() {
  
  const { productId } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState("");
  const [file, setFile] = useState(""); // Updated to null
  const [product_location, setProduct_location] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

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
        setFile(productData.image)
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProductData();
  }, [productId]);

  const handleEditProduct = async () => {
    let imageUrl = "";

    if (file) {
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "uploads");

      try {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dmkqhochv/image/upload",
          data
        );
        imageUrl = uploadRes.data.url;
      } catch (error) {
        console.error("Error uploading image:", error);
        return;
      }
    } 
    // else{
    //   imageUrl = file;
    // }

    const productData = {
      title,
      price,
      description,
      supplier,
      product_location,
      image: imageUrl, // Updated with Cloudinary URL
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/api/products/${productId}`,
        productData
      );
      console.log("Product updated:", response.data);
      setIsSaved(true);
      navigate("/Products");
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="container">
      <Link to="/Products" className="back">
        <BiArrowBack />
      </Link>
      <h3 className="text">Edit product</h3>
      {isSaved && <div className="alert">Product updated successfully!</div>}
      <div className="items">
        <div className="item">
        <div className="list">
            <label>Product Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
              placeholder="Enter Product Title"
              type="text"
            />
          </div>
          <div className="list">
            <label>Supplier</label>
            <input
              onChange={(e) => setSupplier(e.target.value)}
              defaultValue={supplier}
              placeholder="Enter Product Supplier "
              type="text"
            />
          </div>
          <div className="list">
            <label>Price (GH₵)</label>
            <input
              onChange={(e) => setPrice(e.target.value)}
              defaultValue={price}
              placeholder="Enter Product Price"
              type="text"
            />
          </div>
          <div className="list">
            <label>Location</label>
            <input
              onChange={(e) => setProduct_location(e.target.value)}
              defaultValue={product_location}
              placeholder="Enter Product Location"
              type="text"
            />
          </div>
          <div className="list">
            <label>Image</label>
            <input
              onChange={(e) => setFile(e.target.files[0])}
              // defaultValue={file}
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
              defaultValue={description}
              placeholder="Enter Product Description"
              type="text"
            />
          </div>

          
          <hr />
          <button className="btn" onClick={handleEditProduct}>
            Save Changes
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
