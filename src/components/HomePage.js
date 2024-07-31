import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Resume Processing App</h1>
      <p>Upload your resume and prepare for technical interviews.</p>
      <div>
        <Link to="/upload"><button>Upload Resume</button></Link>
        <Link to="/about"><button>View Sample Questions</button></Link>
      </div>
    </div>
  );
};

export default HomePage;
