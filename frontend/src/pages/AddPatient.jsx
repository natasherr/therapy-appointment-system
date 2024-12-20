import React, { useState } from 'react';
import axios from 'axios';

const AddPatient = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('http://localhost:8000/patients', {
      name,
      email
    })
    .then(response => {
      console.log(response.data);
      setName('');
      setEmail('');
    })
    .catch(error => {
      console.error('Axios error:', error);
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add Patient</h1>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
