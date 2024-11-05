// src/App.js
import React, { useState } from 'react';
import UploadDocument from './components/UploadDocument';
import QuestionAnswer from './components/QuestionAnswer';
import RelevantChunks from './components/RelevantChunks';
import './App.css';

const App = () => {
  const [relevantChunks, setRelevantChunks] = useState([]);

  const handleProcessComplete = (data) => {
    console.log('Document processed:', data);
  };

  const handleAnswerReceived = (chunks) => {
    setRelevantChunks(chunks);
  };

  return (
    <div className="App">
      <h1>AI-Enhanced Document QA System</h1>
      <UploadDocument onProcessComplete={handleProcessComplete} />
      <QuestionAnswer onAnswerReceived={handleAnswerReceived} />
      <RelevantChunks chunks={relevantChunks} />
    </div>
  );
};

export default App;
