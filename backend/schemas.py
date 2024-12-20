from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional

class AppointmentBase(BaseModel):
    appointment_time: datetime

class AppointmentCreate(AppointmentBase):
    patient_id: int
    therapist_id: int

class Appointment(AppointmentBase):
    id: int
    patient_id: int
    therapist_id: int

    class Config:
        orm_mode = True

class PatientBase(BaseModel):
    name: str

class PatientCreate(PatientBase):
    name: str

class Patient(PatientBase):
    id: int
    appointments: List[Appointment] = []

    class Config:
        from_attributes = True

class TherapistBase(BaseModel):
    name: str

class TherapistCreate(TherapistBase):
    name:str


class Therapist(TherapistBase):
    id: int
    appointments: List[Appointment] = []

    class Config:
        from_attributes = True