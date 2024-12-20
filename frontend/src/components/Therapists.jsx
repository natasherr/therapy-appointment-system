import React, { useState, useEffect } from 'react';

const Therapists = () => {
  const [therapists, setTherapists] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/therapists')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTherapists(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
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
