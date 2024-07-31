import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TextExtractionPage = () => {
  const [extractedText, setExtractedText] = useState('');

  useEffect(() => {
    // Fetch extracted text from the server
    axios.get('http://localhost:5000/text-extraction')
      .then(response => setExtractedText(response.data))
      .catch(error => console.error('Error fetching extracted text:', error));
  }, []);

  return (
    <div>
      <h1>Text Extraction</h1>
      <p>Extracted Text from Resume:</p>
      <pre>{extractedText}</pre>
      <button onClick={() => window.location.href = '/interview-questions'}>Proceed to Questions</button>
    </div>
  );
};

export default TextExtractionPage;
