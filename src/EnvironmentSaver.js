import React, { useState } from 'react';

const EnvironmentSaver = () => {
  const [pledge, setPledge] = useState('');

  const handlePledgeChange = (e) => {
    setPledge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for pledging to: "${pledge}". Every action counts towards saving our environment!`);
    setPledge(''); // Reset the pledge input after submission
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Save the Environment</h2>
      <p className="mb-4">Our environment is facing unprecedented challenges from pollution, climate change, and resource depletion. It's up to all of us to take action and contribute to its preservation. Here are a few things you can do:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Reduce, reuse, and recycle.</li>
        <li>Use less water and electricity.</li>
        <li>Plant trees and support reforestation efforts.</li>
        <li>Use public transportation, carpool, walk, or bike whenever possible.</li>
        <li>Support and buy from eco-friendly companies.</li>
      </ul>
     
    </div>
  );
};

export default EnvironmentSaver;
