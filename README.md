🔍 AI-Enhanced Document QA System

An intelligent document ingestion and question-answering system that leverages advanced AI models and vector databases for enhanced information retrieval and analysis. This project demonstrates state-of-the-art AI, backend, and frontend integrations to provide seamless document processing, topic modeling, and question answering.

🌟 Key Features

    Document Upload & Ingestion: Upload PDF or text files for processing.
    AI-Powered Question Answering: Get precise answers from document content.
    Intelligent Chunking & Retrieval: Uses advanced document chunking and retrieval augmented generation (RAG) for efficient context extraction.
    Topic Modeling with Metadata: Python scripts to analyze document topics and enrich metadata in Pinecone for better relevance.
    Interactive Frontend: A React-based user interface for seamless document interaction and Q&A.

🛠️ Tech Stack
Core Technologies

    Frontend: React with Axios for API communication.
    Backend: Node.js and Express for routing and API handling.
    AI Models: Claude 3.5 API for text analysis and question-answering.
    Vector Storage: Pinecone for vector embeddings and metadata storage.
    Topic Modeling: Python with scikit-learn for topic analysis.

System Workflow

    Document Upload: The user uploads a document via the React frontend.
    Document Processing:
        Backend (Node.js): Extracts text, splits content into chunks, and generates embeddings.
        AI Integration: Embeddings are created using advanced models, and vectors are stored in Pinecone.
        Metadata Update: The Python script performs topic modeling and updates document metadata.
    Question Answering:
        The backend retrieves relevant chunks from Pinecone based on the question.
        An enriched prompt is sent to GPT-4 or Claude for accurate answers.
    Results Display: The frontend displays answers, confidence scores, and relevant document chunks.

📂 Folder Structure

bash

AI-Enhanced-Document-QA-System/
│
├── frontend/            # React frontend
├── backend/             # Node.js and Express backend
└── python-scripts/      # Python scripts for topic modeling

Each folder has its own README with setup instructions and feature details:

    Frontend README
    Backend README
    Python Scripts README

🚀 Getting Started
Prerequisites

    Node.js and npm for backend and frontend.
    Python 3.8+ for topic modeling scripts.
    API keys for OpenAI (GPT-4) or Claude, and Pinecone.

Installation

    Clone the Repository

    bash

    git clone <repository-url>
    cd AI-Enhanced-Document-QA-System

    Install Each Component
        Frontend: Setup instructions
        Backend: Setup instructions
        Python Scripts: Setup instructions

🎯 Usage
1. Start the Backend Server

bash

cd backend
npm start

2. Run the Frontend

bash

cd frontend
npm start

3. Execute Python Topic Modeling Scripts

bash

cd python-scripts
python run_topic_modeling.py --documentId <id> --documentContent <content>

📈 Future Improvements

    Enhanced Visualization: Improve UI to display document structure and highlights.
    Multi-Language Support: Add support for multiple languages in document processing.
    Asynchronous Processing: Implement background tasks for large document processing.

👥 Contributing

    Fork the repository
    Create a branch for your feature
    Make a pull request

📜 License

MIT License