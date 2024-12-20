# Therapy Appointment System (Full Stack)

## Description
A digital therapy appointment system that simplifies scheduling for patients and enhances time management for therapists.

## Problem Statement
Managing appointments in healthcare is often a nightmare for both patients and providers due to long phone calls, paperwork, and manual scheduling. These traditional methods are prone to errors, missed appointments, and inefficiency. A streamlined, digital solution is needed to simplify appointment scheduling for patients and improve time management for therapists.

## Solution Statement
The Therapy Appointment System enables patients to manage their appointments while therapists can efficiently manage schedules and track appointments through an intuitive interface, reducing administrative burdens and enhancing care quality.

## API
- **Framework**: FastAPI

## Project MVP / User Stories

### For Patients:
- Can view available appointments.
- Can book an appointment.
- Can reschedule an appointment.
- Can delete/cancel a booked appointment.
- Can register and login.

### For Therapists:
- Can view their appointments.
- Can reschedule appointments.
- Can cancel an appointment.

## Relationships

### Table Relationships
- **Patients and Appointments**
  - **Relationship**: One-to-Many
  - One patient can have multiple appointments.
  - The `patient_id` in the Appointments table is a foreign key referencing the Patients table.

- **Therapists and Appointments**
  - **Relationship**: One-to-Many
  - One therapist can manage multiple appointments.
  - The `therapist_id` in the Appointments table is a foreign key referencing the Therapists table.

## Technologies Used
- FastAPI
- SQLAlchemy
- Alembic
- React
- React Router
- Bootstrap

## Future Plans
- Patient portal enhancements.
- Feature for patients to give service reviews.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd therapy-appointment-system

# For backend
cd backend
pipenv shell
fastapi dev app.py

# For frontend
cd frontend
npm run dev

# Run migrations
alembic upgrade head

