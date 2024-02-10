import React, { useState } from 'react';
import Connect from './components/Wallet/Connect';

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Here you would typically handle the transaction (e.g., API call)
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto my-10 bg-white shadow-lg p-6 rounded-lg">
      <div className="form-group">
        <label htmlFor="name" className="form-label inline-block mb-2 text-green-700 font-semibold">Name</label>
        <input type="text" className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-400 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label inline-block mb-2 text-green-700 font-semibold">Email</label>
        <input type="email" className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-400 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" name="email" value={formData.email} onChange={handleChange} />
      </div>
      {/* <div className="form-group">
        <label htmlFor="amount" className="form-label inline-block mb-2 text-green-700 font-semibold">Donation Amount</label>
        <input type="number" className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-green-400 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" name="amount" value={formData.amount} onChange={handleChange} />
      </div> */}
      {/* <button type="submit" className="w-full px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">Submit</button> */}
			<Connect/>
    </form>
  );
};

export default Donation;
