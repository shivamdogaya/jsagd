import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorDashboard from './DoctorDashboard';
import PatientDashboard from './PatientDashboard';
import HealthRecord from './HealthRecord';
import EditProfilePage from './EditProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EditProfilePage />} />
        <Route path="/health-record" element={<HealthRecord />} />
      </Routes>
    </Router>
  );
}

export default App;
