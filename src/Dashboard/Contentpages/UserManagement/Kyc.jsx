import React, { useState } from 'react';
import { users } from '../Dummydata.js'; // Importing dummy data
import "../../Contentpagescss/kyc.css"

const Kyc = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

  // dummy data
  const [data, setData] = useState(users); // Using dummy data
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleSearch = () => {
    if (searchQuery) {
      setSearchResult(`You searched for: ${searchQuery}`);
    } else {
      setSearchResult("Please enter a search term.");
    }
  };

  // Sorting function
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = [...data].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="w-full p-4">
        <h1 className="border-b-2 border-red-200 text-left text-xl font-semibold mb-4">
          User management / Pending ID verification
        </h1>
      </div>

      <div className="kycmain px-6">
        <div className="kyc-pending py-2">
          <h2 className="text-left text-lg font-medium">Pending ID verification</h2>
        </div>

        <div className="kyc-part2 flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h2>Show</h2>
            <div>
              <label htmlFor="age-range" className="sr-only">Age Range</label>
              <select
                id="age-range"
                name="age-range"
                className="border border-gray-300 rounded p-2 text-black"
              >
                <option value="10-20">10-20</option>
                <option value="20-40">20-40</option>
                <option value="40-60">40-60</option>
                <option value="60-80">60-80</option>
                <option value="80-100">80-100</option>
              </select>
            </div>
            <h2>entries</h2>
          </div>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter your search query"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded p-2 text-sm mr-2"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Search
            </button>
          </div>
        </div>

        {searchResult && <p className="text-green-500 mb-4">{searchResult}</p>}
      </div>

      {/* Dummy Data Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-black text-white text-left border-collapse">
          <thead>
            <tr>
              <th
                className="border-b p-4 cursor-pointer hover:bg-black"
                onClick={() => handleSort('firstName')}
              >
                First Name
              </th>
              <th
                className="border-b p-4 cursor-pointer hover:bg-black"
                onClick={() => handleSort('lastName')}
              >
                Last Name
              </th>
              <th
                className="border-b p-4 cursor-pointer hover:bg-black"
                onClick={() => handleSort('email')}
              >
                Email
              </th>
              <th
                className="border-b p-4 cursor-pointer hover:bg-black"
                onClick={() => handleSort('createdAt')}
              >
                Created At
              </th>
              <th className="border-b p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-500">
                <td className="border-b p-4">{item.firstName}</td>
                <td className="border-b p-4">{item.lastName}</td>
                <td className="border-b p-4">{item.email}</td>
                <td className="border-b p-4">{new Date(item.createdAt).toLocaleDateString()}</td>
                <td className="border-b p-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    {item.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded border ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } hover:bg-blue-500 hover:text-white`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default Kyc;
