import React from 'react';

function Appointment({ appointment }) {
  return (
    <div>
      <h2>Appointment Details</h2>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
      {/* Add other appointment details as needed */}
    </div>
  );
}

export default Appointment;
