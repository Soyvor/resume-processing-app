import React, { useState } from 'react';
import axios from 'axios';

const ResumeUploadPage = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [response, setResponse] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = async () => {
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData);
      setResponse(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload Your Resume</h1>
      <input type="file" accept=".pdf" onChange={onFileChange} />
      <button onClick={onFileUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      <div>
        <h2>Response</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default ResumeUploadPage;
