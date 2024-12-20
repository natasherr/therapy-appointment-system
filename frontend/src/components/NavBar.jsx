import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">Therapy Appointment System</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/add-appointment">Add Appointment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/appointments">View Appointments</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/therapists">View Therapists</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-therapist">Add Therapist</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/patients">View Patients</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add-patient">Add Patient</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
