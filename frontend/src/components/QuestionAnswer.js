// src/components/QuestionAnswer.js
import React, { useState } from 'react';
import axios from 'axios';

const QuestionAnswer = ({ onAnswerReceived }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/qa', { question });
      setAnswer(response.data.answer);
      onAnswerReceived(response.data.relevantChunks || []);
    } catch (error) {
      setAnswer('Error fetching answer');
    }
  };

  return (
    <div>
        <h2 id="question-section">Ask a Question</h2>
        <label htmlFor="question-input">Enter your question</label>
        <input
            type="text"
            id="question-input"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Type your question here..."
            aria-describedby="question-instruction"
        />
        <button onClick={handleQuestionSubmit} aria-labelledby="question-section">
            Submit
        </button>
        <p id="question-instruction">Ask a question about the uploaded document.</p>
        {answer && <p aria-live="assertive"><strong>Answer:</strong> {answer}</p>}
    </div>

  );
};

export default QuestionAnswer;
