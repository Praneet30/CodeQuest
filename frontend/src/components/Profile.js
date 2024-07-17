import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../providers/authProvider";
import Header from "./Header";
import { backendurl } from "../backendurl";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
 
  const [editFormData, setEditFormData] = useState({
    username: "",
    email: "",
    contact: "",
  });

  const authData = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
    
      try {
        const userid = authData.authData.user._id;
        const response = await axios.get(`${backendurl}/user/${userid}`);
        const userData = response.data;
        setUser(userData);
        setEditFormData({
          username: userData.username,
          email: userData.email,
          contact: userData.contact,
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
     
    };

    fetchUserData();
  }, [authData]);

  // Handle input changes in the edit form
  const handleEditInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission for editing
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userid = authData.authData.user._id;
      const updatedUserData = {
        username: editFormData.username,
        email: editFormData.email,
        contact: editFormData.contact,
      };
      const response = await axios.put(
        `${backendurl}/user/edit/${userid}`,
        updatedUserData
      );
      setUser(response.data);
      setEditing(false);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  
  return (
    <>
    <Header />
    <br></br><br></br>
    <div className="container mx-auto px-4 py-8">
  {user ? (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">Profile</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-center text-xl font-semibold text-gray-800">User Details</h3>
          <button
            onClick={() => setEditing(!editing)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:outline-none"
          >
            {editing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        {editing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                name="username"
                value={editFormData.username}
                onChange={handleEditInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
                Contact Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="text"
                placeholder="Contact Number"
                name="contact"
                value={editFormData.contact}
                onChange={handleEditInputChange}
                required
              />
            </div>
            <div className="flex items-center justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 focus:outline-none mr-4"
                type="submit"
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600 focus:outline-none"
                type="button"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <>
            <p className="text-gray-700 mb-2">
              <strong>Username:</strong> {user.username}
            </p>
            <p className="text-gray-700">
              <strong>Contact Number:</strong> {user.contact}
            </p>
          </>
        )}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-6">
        <p className="text-gray-700 mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        {/* Add more sections as needed */}
      </div>
    </div>
  ) : (
    <p>No user data available</p>
  )}
</div>

  </>
  
  );
};

export default Profile;
