# Schemas tells what our endpoints should expect
from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional


class AppointmentBase(BaseModel):
    appointment_time: datetime

class AppointmentCreate(AppointmentBase):
    patient_id: int
    therapist_id: int

class Appointment(AppointmentBase):
    
    patient_id: int
    therapist_id: int

    class Config:
        orm_mode = True

class PatientBase(BaseModel):
    name: str

class PatientCreate(PatientBase):
    
    name: str
    email : str

class Patient(PatientBase):
    
    appointments: List[Appointment] = []

    class Config:
        orm_mode = True

class TherapistBase(BaseModel):
    name: str

class TherapistCreate(TherapistBase):
    
    name: str
    email : str


class Therapist(TherapistBase):
    
    appointments: List[Appointment] = []

    class Config:
        orm_mode = True