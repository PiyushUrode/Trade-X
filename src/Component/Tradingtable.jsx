import React from 'react';

const TradingTable = ({ data }) => {
  return (
    <table className="min-w-full border-collapse border border-gray-400">
      <thead>
        <tr>
          <th className="border-b-2 border-gray-500 px-4 py-2">Market</th>
          <th className="border-b-2 border-gray-500 px-4 py-2">Last Traded Price</th>
          <th className="border-b-2 border-gray-500 px-4 py-2">Change</th>
          <th className="border-b-2 border-gray-500 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className=" border-b-2 border-gray-500  px-4 py-2">{item.market}</td>
            <td className="border-b-2  border-gray-500  px-4 py-2">{item.lastPrice}</td>
            <td
              className={`border-b-2 border-gray-500 px-4 py-2 ${
                item.change < 0 ? 'text-red-500' : 'text-green-500'
              }`}
            >
              {item.change}
            </td>
            <td className="border-b-2 border-gray-500  px-4 py-2">
              <button className="bg-black border border-green-500 rounded-md  text-white px-4 py-2 rounded hover:bg-green-500">Trade</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TradingTable;
