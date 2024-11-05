Backend README

```markdown
# 🔙 Backend - AI-Enhanced Document QA System

This backend, powered by **Node.js** and **Express**, supports document ingestion, question-answering, and document retrieval using vector storage in Pinecone.

![Node.js](https://img.shields.io/badge/Node.js-%5E14.17.0-green) ![Express](https://img.shields.io/badge/Express-%5E4.17.1-lightgrey)

## ✨ Features

- **Document Upload & Ingestion**: Supports both PDF and text files.
- **Pinecone Integration**: Stores and retrieves document chunks as vector embeddings for efficient search.
- **Error Handling & Validation**: Ensures robust backend functionality.

## 🔧 Tech Stack

- **Node.js**: JavaScript runtime for building scalable server applications.
- **Express**: Web framework for handling API requests and responses.
- **Pinecone**: Vector database for efficient storage and retrieval.
- **Claude 3.5 API**: For advanced NLP and question-answering.

## 📬 API Endpoints

| Method | Endpoint        | Description                                  |
|--------|------------------|----------------------------------------------|
| POST   | `/upload`       | Uploads a document for ingestion             |
| POST   | `/qa`           | Processes question-answering requests        |


## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- API keys for OpenAI or Claude (GPT-4) and Pinecone

### Setup

1. **Clone the Repository**
   ```bash
   git clone <backend-repo-url>
   cd backend

    Install Dependencies

    bash

npm install

Set Environment Variables (create a .env file):

plaintext

OPENAI_API_KEY=your_api_key_here
PINECONE_API_KEY=your_pinecone_key_here

Run the Server

bash

    node server.js

📂 Folder Structure

    routes/: Contains individual route handlers for /upload, /ingest, and /qa.
    services/: Utility functions for document processing and Pinecone integration.

🛠️ Future Improvements

    Rate Limiting: To prevent overuse of resources.
    Enhanced Error Logging: For easier debugging and support.

📜 License

MIT License