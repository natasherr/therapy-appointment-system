import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/patients')
      .then(response => {
        setPatients(response.data);
      })
      .catch(error => {
        console.error('Axios error:', error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Patients</h1>
      <ul className="list-group">
        {patients.map(patient => (
          <li key={patient.id} className="list-group-item">
            <strong>Name:</strong> {patient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Patients;
