// src/components/RelevantChunks.js
import React from 'react';

const RelevantChunks = ({ chunks }) => {
  return (
    <div>
      <h2>Relevant Document Chunks</h2>
      {chunks.length > 0 ? (
        chunks.map((chunk, index) => (
          <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <p><strong>Chunk:</strong> {chunk.text}</p>
            <p><strong>Confidence Score:</strong> {chunk.score}</p>
          </div>
        ))
      ) : (
        <p>No relevant chunks found.</p>
      )}
    </div>
  );
};

export default RelevantChunks;
