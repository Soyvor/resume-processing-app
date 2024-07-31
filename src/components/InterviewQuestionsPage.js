import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterviewQuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch interview questions from the server
    axios.get('http://localhost:5000/interview-questions')
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching interview questions:', error));
  }, []);

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h1>Interview Questions</h1>
      {questions.length > 0 && (
        <div>
          <p>{questions[currentIndex]}</p>
          <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
          <button onClick={handleNext} disabled={currentIndex === questions.length - 1}>Next</button>
        </div>
      )}
      <button onClick={() => window.location.href = '/dashboard'}>Go to Dashboard</button>
    </div>
  );
};

export default InterviewQuestionsPage;
