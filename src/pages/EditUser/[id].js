import React, { useState, useEffect } from "react";
import "../NewProduct.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function EditUser() {
  const { userId } = useParams();
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  //   const [email, setEmail] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product data using productId and populate the form fields
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/users/${userId}`
        );
        const userData = response.data;

        setUsername(userData.username);
        setLocation(userData.location);
        setEmail(userData.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleEditUser = async () => {
    const userData = {
      username,
      email,
      location,
    };

    try {
      const response = await axios.put(
        `http://localhost:3000/api/users/${userId}`,
        userData
      );
      console.log("User updated:", response.data);
      setIsSaved(true);
      navigate("/Users");
    } catch (error) {
      console.error("Error updating user details:", error);
    }
  };

  return (
    <div className="container">
      <Link to="/Users" className="back">
        <BiArrowBack />
      </Link>
      <h3 className="text">Edit user</h3>
      {isSaved && (
        <div className="alert">User details updated successfully!</div>
      )}
      <div className="items">
        <div className="item">
          <div className="list">
            <label>Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              defaultValue={username}
              placeholder="Enter username"
              type="text"
            />
          </div>
          <div className="list">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              defaultValue={email}
              placeholder="Enter Product Supplier "
              type="text"
            />
          </div>
          <div className="list">
            <label>Location</label>
            <input
              onChange={(e) => setLocation(e.target.value)}
              defaultValue={location}
              placeholder="Enter Product Price"
              type="text"
            />
          </div>
        </div>

        <hr />
        <button
          style={{
            justifySelf: "center",
            marginTop: 20,
            backgroundColor: "rgb(23, 46, 46)",
            color: "white",
            marginLeft: '30%',
            height: 50,
            width: '30%',
            fontWeight: 'bold',
            border: 'none',
            fontSize: 18,
            cursor: 'pointer',
            borderRadius: 5
          }}
          onClick={handleEditUser}
        >
          Save Changes
        </button>
        <hr />
      </div>
    </div>
  );
}

export default EditUser;
