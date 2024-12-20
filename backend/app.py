from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from models import get_db, Patient, Therapist, Appointment
import schemas

app = FastAPI()

app.add_middleware(CORSMiddleware, allow_origins = ['*'], allow_methods=['*'])

# Defining routes
@app.get("/")
def index():
    return {"message": "Welcome to the Therapy Appointment System"}

# a)Appointments
# GET 
@app.get("/appointments/{id}", response_model=List[schemas.Appointment])
def get_appointments(db: Session = Depends(get_db)):
    appointments = db.query(Appointment).all()
    return appointments

# POST
@app.post("/appointments", response_model=schemas.Appointment)
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
# GET
@app.get("/patients", response_model=List[schemas.Patient])
def get_patients(db: Session = Depends(get_db)):
    patients = db.query(Patient).all()
    return patients

# GET by id
@app.get("/patients/{patient_id}", response_model=schemas.Patient)
def get_patient(patient_id: int, db: Session = Depends(get_db)):
    patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if not patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    return patient

# POST
@app.post("/patients", response_model=schemas.Patient)
def register_patient(patient: schemas.PatientCreate, db: Session = Depends(get_db)):
    db_patient = Patient(**patient.model_dump())
    db.add(db_patient)
    db.commit()
    db.refresh(db_patient)
    return db_patient

# PUT to update a specific patient
@app.put("/patients/{patient_id}", response_model=schemas.Patient)
def update_patient(patient_id: int, patient: schemas.PatientCreate, db: Session = Depends(get_db)):
    db_patient = db.query(Patient).filter(Patient.id == patient_id).first()
    if not db_patient:
        raise HTTPException(status_code=404, detail="Patient not found")
    for key, value in patient.dict().items():
        setattr(db_patient, key, value)
    db.commit()
    db.refresh(db_patient)
    return db_patient


# c)Therapist
# GET
@app.get("/therapists", response_model=List[schemas.Therapist])
def get_therapists(db: Session = Depends(get_db)):
    therapists = db.query(Therapist).all()
    return therapists

# PUT to update a specific therapist
@app.put("/therapists/{therapist_id}", response_model=schemas.Therapist)
def update_therapist(therapist_id: int, therapist: schemas.TherapistCreate, db: Session = Depends(get_db)):
    db_therapist = db.query(Therapist).filter(Therapist.id == therapist_id).first()
    if not db_therapist:
        raise HTTPException(status_code=404, detail="Therapist not found")
    for key, value in therapist.dict().items():
        setattr(db_therapist, key, value)
    db.commit()
    db.refresh(db_therapist)
    return db_therapist

# GET by id
@app.get("/therapists/{therapist_id}", response_model=schemas.Therapist)
def get_therapist(therapist_id: int, db: Session = Depends(get_db)):
    therapist = db.query(Therapist).filter(Therapist.id == therapist_id).first()
    if not therapist:
        raise HTTPException(status_code=404, detail="Therapist not found")
    return therapist


# POST
@app.post("/therapists", response_model=schemas.Therapist)
def register_therapist(therapist: schemas.TherapistCreate, db: Session = Depends(get_db)):
    db_therapist = Therapist(**therapist.model_dump())
    db.add(db_therapist)
    db.commit()
    db.refresh(db_therapist)
    return db_therapist



