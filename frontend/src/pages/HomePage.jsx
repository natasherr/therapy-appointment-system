import React from 'react';

const HomePage = () => {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4 text-primary">Welcome to the Therapy Appointment System</h1>
        <p className="lead text-muted">Where mental health care meets modern convenience.</p>
      </header>

      <section className="bg-light p-4 rounded shadow-sm mb-4">
        <h2 className="h3 text-secondary">Why Choose Our System?</h2>
        <p>
          In today's fast-paced world, managing therapy appointments shouldn't add to your stress. Our Therapy Appointment System offers a user-friendly interface that allows patients to view available appointments, book sessions, and manage their schedules with just a few clicks. Therapists, on the other hand, can efficiently manage their calendars, reschedule appointments, and keep track of their sessions without the hassle of paperwork. Our goal is to reduce administrative burdens and let both patients and therapists focus on what truly matters – mental health and well-being.
        </p>
      </section>

      <section className="bg-light p-4 rounded shadow-sm mb-4">
        <h2 className="h3 text-secondary">Seamless Scheduling Experience</h2>
        <p>
          Our Therapy Appointment System leverages the latest technology to provide a seamless scheduling experience. With features like real-time appointment booking, rescheduling, and cancellations, you can manage your therapy appointments anytime, anywhere. No more waiting on hold or dealing with the back-and-forth of traditional scheduling methods. Our intuitive platform ensures that your mental health care is always just a few clicks away.
        </p>
      </section>

      <section className="bg-light p-4 rounded shadow-sm mb-4">
        <h2 className="h3 text-secondary">Secure and Confidential</h2>
        <p>
          We understand the importance of privacy and confidentiality in mental health care. Our platform is built with robust security measures to protect your personal information and ensure that your data is safe. You can confidently manage your therapy appointments knowing that your privacy is our top priority.
        </p>
      </section>

      <section className="bg-light p-4 rounded shadow-sm mb-4">
        <h2 className="h3 text-secondary">Join Our Community</h2>
        <p>
          Become a part of our growing community dedicated to improving mental health care. By using our Therapy Appointment System, you are taking a proactive step towards better mental health management. Join us in creating a more efficient, accessible, and compassionate approach to therapy. Whether you are a patient seeking support or a therapist looking to streamline your practice, our system is here to support you every step of the way.
        </p>
      </section>

      <footer className="text-center mt-5">
        <p className="text-muted">© 2024 Therapy Appointment System | All rights reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;
