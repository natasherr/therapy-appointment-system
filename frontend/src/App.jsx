import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Patients from './components/Patients';
import Therapists from './components/Therapists';
import Appointments from './components/Appointments';
import AddPatient from './pages/AddPatient';
import AddTherapist from './pages/AddTherapist';
import AddAppointment from './pages/AddAppointment';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/therapists" element={<Therapists />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/add-patient" element={<AddPatient />} />
          <Route path="/add-therapist" element={<AddTherapist />} />
          <Route path="/add-appointment" element={<AddAppointment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

