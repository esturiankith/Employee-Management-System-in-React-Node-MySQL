import React, { useState } from 'react';

const LeavaApplication = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to an API or perform an action
    console.log('Submitted:', {
      startDate,
      endDate,
      reason,
    });
    // You can add further logic here for form submission
  };

  return (
    <div className="container mt-5">
    <h2>Employee Leave Request</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="startDate" className="form-label">Start Date:</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="endDate" className="form-label">End Date:</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reason" className="form-label">Reason for Leave:</label>
        <textarea
          className="form-control"
          id="reason"
          rows="3"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  );
};

export default LeavaApplication;
