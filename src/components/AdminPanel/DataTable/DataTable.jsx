"use client";

import { useState } from "react";
import { Search } from "lucide-react";

const DataTable = ({ data, columns, defaultRowsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const [sortConfig, setSortConfig] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const sortData = (data) => {
    if (!sortConfig) return data;
    const { key, direction } = sortConfig;
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === "ascending" ? -1 : 1;
      if (a[key] > b[key]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
  };

  const handleSort = (key) => {
    setSortConfig((prevConfig) => {
      if (
        prevConfig &&
        prevConfig.key === key &&
        prevConfig.direction === "ascending"
      ) {
        return { key, direction: "descending" };
      }
      return { key, direction: "ascending" };
    });
  };

  const handlePageChange = (newPage) => {
    if (
      newPage > 0 &&
      newPage <= Math.ceil(filteredData.length / rowsPerPage)
    ) {
      setCurrentPage(newPage);
    }
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter((row) =>
    columns.some((col) =>
      String(row[col.key]).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedData = sortData(filteredData);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            id="search"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search..."
            className="w-full px-2 py-1 pr-8 border border-gray-300 text-gray-700 rounded text-sm"
          />
          <div className="absolute inset-y-0 right-2 text-gray-500 flex items-center">
            <Search />
          </div>
        </div>

        <div>
          <label
            htmlFor="rowsPerPage"
            className="mr-2 text-sm font-medium text-gray-600"
          >
            Rows per page:
          </label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
            className="px-2 py-1 border border-gray-300 text-gray-700 rounded text-sm"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                onClick={() => handleSort(col.key)}
                className="cursor-pointer py-6 px-4 border-b border-gray-300 bg-gray-100 text-left text-2xl font-semibold text-gray-700"
              >
                {col.label}
                {sortConfig?.key === col.key && (
                  <span className="ml-2 text-xs">
                    {sortConfig.direction === "ascending" ? "▲" : "▼"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="py-2 px-4 border-b border-gray-300 text-base text-gray-600"
                >
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-4">
        <span className="text-sm font-medium text-gray-600">
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </span>
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-sm font-medium text-gray-600 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={
              currentPage === Math.ceil(filteredData.length / rowsPerPage)
            }
            className="px-4 py-2 bg-gray-200 text-sm font-medium text-gray-600 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
