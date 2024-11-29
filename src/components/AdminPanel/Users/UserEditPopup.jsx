"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

function UserEditPopup({ popUp, userId, onSave }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userId, formData); 
    popUp(); 
  };

  return (
    <div className="w-full md:w-[700px] mx-auto p-4 lg:p-2 bg-white text-gray-700 shadow-md rounded-lg">
      <div className="flex justify-end p-2">
        <X className="cursor-pointer text-xl lg:text-2xl" onClick={popUp} />
      </div>

      <div className="flex justify-center mb-4">
        <p className="text-base font-semibold">Edit User</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserEditPopup;
