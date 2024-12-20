from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Text, DateTime
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime

# connecting to our therapy.db
engine = create_engine('postgresql://admin:bEJbQCp7VWsJbYkvKM4rHr1ESyV1FH5l@dpg-ctika13tq21c73dqgb9g-a.oregon-postgres.render.com/therapy_t4cv', echo=True)

# create a session
Session = sessionmaker(bind=engine)

# create an instance of the session
# Dependency to get the database session
def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()

# create a Base model
Base = declarative_base()

# Creating our model
class Patient(Base):
    __tablename__ = "patients"

    id = Column(Integer, primary_key=True,autoincrement=True, index=True)
    name = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    appointments = relationship("Appointment", back_populates="patient")

class Therapist(Base):
    __tablename__ = "therapists"

    id = Column(Integer, primary_key=True,autoincrement=True, index=True)
    name = Column(String, index=True, nullable=False)
    email = Column(String, unique=True, index=True, nullable=False)
    appointments = relationship("Appointment", back_populates="therapist")

class Appointment(Base):
    __tablename__ = "appointments"

    id = Column(Integer, primary_key=True,autoincrement=True, index=True)
    patient_id = Column(Integer, ForeignKey("patients.id"))
    therapist_id = Column(Integer, ForeignKey("therapists.id"))
    appointment_time = Column(DateTime(), default=datetime.now()) 
    patient = relationship("Patient", back_populates="appointments")
    therapist = relationship("Therapist", back_populates="appointments")
