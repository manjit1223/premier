"use client";

import React, { useState } from "react";
import DataTable from "../DataTable/DataTable";
import { Pencil, Trash2 } from "lucide-react";
import UserEditPopup from "./UserEditPopup";

function Users() {
  const [showPopup, setShowPopup] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);

  const handleEdit = (id) => {
    setEditingUserId(id); 
    setShowPopup(true); 
  };

  const closePopup = () => {
    setEditingUserId(null); 
    setShowPopup(false);
  };

  const [sampleData, setSampleData] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "demo@example.com",
      isAccreditedInvestor: true,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "demo@example.com",
      isAccreditedInvestor: false,
    },
    {
      id: 3,
      firstName: "Alice",
      lastName: "Johnson",
      email: "demo@example.com",
      isAccreditedInvestor: true,
    },
    {
      id: 4,
      firstName: "Chris",
      lastName: "Lee",
      email: "demo@example.com",
      isAccreditedInvestor: true,
    },
    {
      id: 5,
      firstName: "Sara",
      lastName: "Khan",
      email: "demo@example.com",
      isAccreditedInvestor: false,
    },
    {
      id: 6,
      firstName: "Michael",
      lastName: "Brown",
      email: "demo@example.com",
      isAccreditedInvestor: true,
    },
    {
      id: 7,
      firstName: "Robert",
      lastName: "Davis",
      email: "demo@example.com",
      isAccreditedInvestor: true,
    },
    {
      id: 8,
      firstName: "Emily",
      lastName: "Taylor",
      email: "demo@example.com",
      isAccreditedInvestor: true,
    },
    {
      id: 9,
      firstName: "William",
      lastName: "White",
      email: "demo@example.com",
      isAccreditedInvestor: true,
    },
  ]);

  const toggleAccreditation = (id) => {
    setSampleData((prevData) =>
      prevData.map((row) =>
        row.id === id
          ? { ...row, isAccreditedInvestor: !row.isAccreditedInvestor }
          : row
      )
    );
  };

  const columns = [
    { key: "id", label: "ID" },
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "email", label: "Email" },
    {
      key: "isAccreditedInvestor",
      label: "Accredited Investor",
      render: (value, row) => (
        <div
          className={`relative left-[15%] inline-block w-10 h-6 ${
            value ? "bg-[grey]" : "bg-gray-300"
          } rounded-full cursor-pointer`}
          onClick={() => toggleAccreditation(row.id)}
        >
          <span
            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
              value ? "translate-x-4" : ""
            }`}
          ></span>
        </div>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (value, row) => (
        <div className="flex space-x-2">
          <button
            className="bg-[grey] hover:bg-blue-600 text-white py-1 px-3 rounded"
            onClick={() => handleEdit(row.id)}
          >
            <Pencil />
          </button>
          <button
            className="bg-[grey] hover:bg-red-600 text-white py-1 px-3 rounded"
            onClick={() => handleDelete(row.id)}
          >
            <Trash2 />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="py-4 px-10">
      <h1 className="text-4xl text-gray-700 font-bold mb-4">Users</h1>
      <DataTable data={sampleData} columns={columns} defaultRowsPerPage={5} />
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white shadow-2xl rounded-2xl">
            <UserEditPopup popUp={closePopup} userId={editingUserId} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
