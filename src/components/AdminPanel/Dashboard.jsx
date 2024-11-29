import React from "react";
import DataTable from "./DataTable/DataTable";

function Dashboard() {
  const sampleData = [
    { id: 1, name: "John Doe", age: 28, country: "USA" },
    { id: 2, name: "Jane Smith", age: 34, country: "UK" },
    { id: 3, name: "Alice Johnson", age: 24, country: "Canada" },
    { id: 4, name: "Chris Lee", age: 42, country: "Australia" },
    { id: 5, name: "Sara Khan", age: 30, country: "India" },
    { id: 6, name: "Michael Brown", age: 27, country: "Germany" },
    { id: 7, name: "Robert Davis", age: 31, country: "France" },
    { id: 8, name: "Emily Taylor", age: 29, country: "Spain" },
    { id: 9, name: "William White", age: 36, country: "Netherlands" },
  ];

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "country", label: "Country" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Data Table</h1>
      <DataTable data={sampleData} columns={columns} defaultRowsPerPage={5} />
    </div>
  );
}

export default Dashboard;
