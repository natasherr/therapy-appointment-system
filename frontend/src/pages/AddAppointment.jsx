import React, { useState } from 'react';

const AddAppointment = () => {
  const [date, setDate] = useState('');
  const [patientId, setPatientId] = useState('');
  const [therapistId, setTherapistId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch('http://localhost:8000/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date, patientId, therapistId })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      setDate('');
      setPatientId('');
      setTherapistId('');
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Add Appointment</h1>
      <form onSubmit={handleSubmit} className="shadow p-4 rounded">
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="patientId" className="form-label">Patient ID</label>
          <input
            type="number"
            className="form-control"
            id="patientId"
            value={patientId}
            onChange={(event) => setPatientId(event.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="therapistId" className="form-label">Therapist ID</label>
          <input
            type="number"
            className="form-control"
            id="therapistId"
            value={therapistId}
            onChange={(event) => setTherapistId(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Add Appointment</button>
      </form>
    </div>
  );
};

export default AddAppointment;
