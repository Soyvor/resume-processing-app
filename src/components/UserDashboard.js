import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    // Fetch user uploads from the server
    axios.get('http://localhost:5000/dashboard')
      .then(response => setUploads(response.data))
      .catch(error => console.error('Error fetching uploads:', error));
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <ul>
        {uploads.map(upload => (
          <li key={upload.id}>
            {upload.name} - {upload.status}
          </li>
        ))}
      </ul>
      <button onClick={() => window.location.href = '/upload'}>Upload New Resume</button>
      <button onClick={() => window.location.href = '/'}>Return to Home</button>
    </div>
  );
};

export default UserDashboard;
