import React, { useState } from 'react';
import { Cryptocurrencydata } from '../Dummydata.js'; // Importing dummy data

const Cryptocurrency = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");

  // Dummy data
  const [data, setData] = useState(Cryptocurrencydata); // Using dummy data
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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

  const toggleStatus = (id) => {
    setData(prevData => 
      prevData.map(item => 
        item.id === id ? { ...item, status: item.status === 'Enabled' ? 'Disabled' : 'Enabled' } : item
      )
    );
  };

  const handleDelete = (id) => {
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  return (
    <>
      <div className="w-full p-4">
        <h1 className="border-b-2 border-red-200 text-left text-xl font-semibold mb-4">
          Cryptocurrency Management / Supported Cryptocurrencies
        </h1>
      </div>

      <div className="kycmain px-6">
        <div className="kyc-pending  py-2 text-right">
        <button className="  px-3 py-1 mx-6 bg-yellow-400 text-white text-lg font-medium rounded">
            + Update Cryptocurrency
          </button>
          <button className="px-3 py-1 bg-yellow-400 text-white text-lg font-medium rounded">
            + New Cryptocurrency
          </button>
        </div>

        <div className="kyc-part2 flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <h2>Show</h2>
            <div>
              <label htmlFor="entries" className="sr-only">Entries</label>
              <select
                id="entries"
                name="entries"
                className="border border-gray-300 rounded p-2 text-black"
              >
                <option value="4">1-4</option>
                <option value="10">1-10</option>
                <option value="20">1-20</option>
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
              <th className="border-b p-4 cursor-pointer hover:bg-black" onClick={() => handleSort('logo')}>
                Logo
              </th>
              <th className="border-b p-4 cursor-pointer hover:bg-black" onClick={() => handleSort('name')}>
                Currency Name
              </th>
              <th className="border-b p-4 cursor-pointer hover:bg-black" onClick={() => handleSort('type')}>
                Currency Type
              </th>
              <th className="border-b p-4 cursor-pointer hover:bg-black" onClick={() => handleSort('code')}>
                Currency Code
              </th>
              <th className="border-b p-4 cursor-pointer hover:bg-black" onClick={() => handleSort('price')}>
                Currency Price
              </th>
              <th className="border-b p-4 cursor-pointer hover:bg-black" onClick={() => handleSort('status')}>
                Status
              </th>
              <th className="border-b p-4">Created At</th>
              <th className="border-b p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="hover:bg-slate-500">
                <td className="border-b p-4"><img src={item.logo} alt={item.name} className="h-8 w-8" /></td>
                <td className="border-b p-4">{item.name}</td>
                <td className="border-b p-4">{item.type}</td>
                <td className="border-b p-4">{item.code}</td>
                <td className="border-b p-4">{item.price}</td>
                <td className="border-b p-4">
                  <button
                    onClick={() => toggleStatus(item.id)}
                    className={`px-4 py-2 rounded ${item.status === 'Enabled' ? 'bg-green-500' : 'bg-red-500'}`}
                  >
                    {item.status}
                  </button>
                </td>
                <td className="border-b p-4">{item.createdAt}</td>
                <td className="border-b p-4">
                  <button className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          className="px-4 py-2 rounded border bg-gray-200 hover:bg-blue-500 hover:text-white"
        >
          Previous
        </button>

        <div>
          {indexOfFirstItem + 1} - {indexOfLastItem} of {data.length}
        </div>

        <button
          onClick={() => paginate(currentPage < Math.ceil(data.length / itemsPerPage) ? currentPage + 1 : currentPage)}
          className="px-4 py-2 rounded border bg-gray-200 hover:bg-blue-500 hover:text-white"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Cryptocurrency;
