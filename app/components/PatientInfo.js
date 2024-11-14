import React from 'react';

function PatientInfo({ patient }) {
  return (
    <div>
      <h2>Patient Information</h2>
      <p>Name: {patient.name}</p>
      <p>Age: {patient.age}</p>
      {/* Add other patient details as needed */}
    </div>
  );
}

export default PatientInfo;
