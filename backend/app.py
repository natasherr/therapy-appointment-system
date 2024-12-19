from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from models import get_db, Patient, Therapist, Appointment
import schemas
from schemas import Appointment , AppointmentBase, AppointmentCreate, Patient , PatientBase, PatientCreate , Therapist, TherapistBase, TherapistCreate

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins = ['*'], allow_methods=['*'])

# Defining routes
@app.get("/")
def index():
    return {"message": "Welcome to the Therapy Appointment System"}

# a)Appointments
# GET 
@app.get("/appointments", response_model=List[schemas.Appointment])
def get_appointments(db: Session = Depends(get_db)):
    appointments = db.query(Appointment).all()
    return appointments

# POST
@app.post("/appointments/{appointment_id}", response_model=schemas.Appointment)
def book_appointment(appointment: schemas.AppointmentCreate, db: Session = Depends(get_db)):
    db_appointment = Appointment(**appointment.model_dump())
    db.add(db_appointment)
    db.commit()
    db.refresh(db_appointment)
    return db_appointment

# PUT
@app.put("/appointments/{appointment_id}", response_model=schemas.Appointment)
def reschedule_appointment(appointment_id: int, appointment: schemas.AppointmentCreate, db: Session = Depends(get_db)):
    db_appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not db_appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    for key, value in appointment.model_dump().items():
        setattr(db_appointment, key, value)
    db.commit()
    db.refresh(db_appointment)
    return db_appointment

# DELETE
@app.delete("/appointments/{appointment_id}")
def cancel_appointment(appointment_id: int, db: Session = Depends(get_db)):
    db_appointment = db.query(Appointment).filter(Appointment.id == appointment_id).first()
    if not db_appointment:
        raise HTTPException(status_code=404, detail="Appointment not found")
    db.delete(db_appointment)
    db.commit()
    return {"detail": "Appointment canceled"}

# b)Patient

# POST
@app.post("/patients", response_model=schemas.Patient)
def register_patient(patient: schemas.PatientCreate, db: Session = Depends(get_db)):
    db_patient = Patient(**patient.model_dump())
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient


# c)Therapist
# POST
@app.post("/therapists", response_model=schemas.Therapist)
def register_therapist(therapist: schemas.TherapistCreate, db: Session = Depends(get_db)):
    db_therapist = Therapist(**therapist.model_dump())
    db.add(db_therapist)
    db.commit()
    db.refresh(db_therapist)
    return db_therapist



