import React from 'react';

const ProcessingPage = () => {
  return (
    <div>
      <h1>Processing Your Resume</h1>
      <p>Your resume is being processed. Please wait...</p>
      <p>Estimated time: 2-5 minutes</p>
      <button onClick={() => window.location.href = '/'}>Return to Home</button>
    </div>
  );
};

export default ProcessingPage;
