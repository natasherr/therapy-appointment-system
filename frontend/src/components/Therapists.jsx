import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Therapists = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/therapists')
      .then(response => {
        setTherapists(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Therapists</h1>
      <ul className="list-group">
        {therapists.map(therapist => (
          <li key={therapist.id} className="list-group-item">
            <strong>Name:</strong> {therapist.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Therapists;
