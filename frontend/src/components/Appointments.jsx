import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.post('https://therapy-appointment-system.onrender.com/appointments')
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Appointments</h1>
      <ul className="list-group">
        {appointments.map(appointment => (
          <li key={appointment.id} className="list-group-item">
            <strong>Date:</strong> {appointment.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
