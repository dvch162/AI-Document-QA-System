// src/components/UploadDocument.js
import React, { useState } from 'react';
import axios from 'axios';

const UploadDocument = ({ onProcessComplete }) => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      setStatus('Uploading...');
      const response = await axios.post('http://localhost:3000/ingest', formData);
      setStatus('Processing complete!');
      onProcessComplete(response.data);
    } catch (error) {
      setStatus('Error in processing document.');
    }
  };

  return (
    <div role="region" aria-labelledby="upload-section">
    <h2 id="upload-section">Upload Document</h2>
    <input
      type="file"
      onChange={handleFileChange}
      aria-describedby="file-upload-description"
      aria-label="Select a document to upload"
    />
    <p id="file-upload-description">Choose a PDF or text file to upload for processing.</p>
    <button onClick={handleUpload} aria-live="polite">Upload</button>
  </div>
  
  );
};

export default UploadDocument;
