import React, { useState } from 'react';

const Admin = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: 'SUPPORT', // Default value for role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`First Name: ${formData.firstName}, Last Name: ${formData.lastName}, Email: ${formData.email}, Phone No: ${formData.phone}, Role: ${formData.role}`);
  };

  return (
   <> 
   <div className='pt-5 pb-5'> <h1 className='bg-gradient-to-bl'> Admin Login </h1></div>
    <form onSubmit={handleSubmit} className="p-5 grid grid-rows-2  gap-10 ">
      <div className= 'flex flex-row  '>
        <label className="block mb-1 w-1/2 align-bottom  text-left ">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder='YourName'
          value={formData.firstName}
          onChange={handleChange}
          className="bg-black border-opacity-65 border-r-blue-800 px-5 border-b-blue-500  rounded-2xl border-r-4  border-b-2  w-full"
          required
        />
      </div>
     <div className= 'flex flex-row  '>
               <label className="block mb-1 w-1/2 align-bottom  text-left ">Last Name</label>
        <input
          type="text"
          name="lastName"
                    placeholder='LastName'
          value={formData.lastName}
          onChange={handleChange}
          className="bg-black border-opacity-65 border-r-blue-800 px-5 border-b-blue-500  rounded-2xl border-r-4  border-b-2  w-full"

          required
        />
      </div>
     <div className= 'flex flex-row  '>
             <label className="block mb-1 w-1/2 align-bottom  text-left ">Email</label>
        <input
          type="email"
          name="email"
                    placeholder='EmailName'
          value={formData.email}
          onChange={handleChange}
          className="bg-black border-opacity-65 border-r-blue-800 px-5 border-b-blue-500  rounded-2xl border-r-4  border-b-2  w-full"

          required
        />
      </div>
     <div className= 'flex flex-row  '>
             <label className="block mb-1 w-1/2 align-bottom  text-left ">Phone No</label>
        <input
          type="tel"
          name="phone"
                    placeholder='PhoneName'
          value={formData.phone}
          onChange={handleChange}
          className="bg-black border-opacity-65 border-r-blue-800 px-5  border-b-blue-500  rounded-2xl border-r-4  border-b-2  w-full"

          required
        />
      </div>
     <div className= 'flex flex-row  '>
             <label className="block mb-1 w-1/2 align-bottom  text-left ">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="bg-black border-opacity-65 border-r-blue-800 px-5  border-b-blue-500  rounded-2xl border-r-4  border-b-2  w-full"

        >
          <option value="SUPPORT">SUPPORT</option>
          <option value="TRADERS">TRADERS</option>
          <option value="USER MANAGEMENT">USER MANAGEMENT</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-black border-opacity-65 border-blue-800   rounded-2xl border-r-4  border-2  w-full"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default Admin;
