import React, { useState, useEffect } from 'react';

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/patients')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPatients(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
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
