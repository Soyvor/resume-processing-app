import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [response, setResponse] = useState('');

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("resume", file);

    axios.post("http://localhost:5000/upload", formData)
      .then(res => setResponse(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Upload Your Resume</h1>
      <input type="file" accept=".pdf" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
      <div>
        <h2>Response</h2>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default FileUpload;
