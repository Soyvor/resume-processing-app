import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResumeUploadPage from './components/ResumeUploadPage';
import ProcessingPage from './components/ProcessingPage';
import TextExtractionPage from './components/TextExtractionPage';
import InterviewQuestionsPage from './components/InterviewQuestionsPage';
import UserDashboard from './components/UserDashboard';
import SupportPage from './components/SupportPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<ResumeUploadPage />} />
        <Route path="/processing" element={<ProcessingPage />} />
        <Route path="/text-extraction" element={<TextExtractionPage />} />
        <Route path="/interview-questions" element={<InterviewQuestionsPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
