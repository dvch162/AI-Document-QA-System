# topic_modeling.py

import pinecone
from pinecone.grpc import PineconeGRPC as Pinecone
from gensim.corpora import Dictionary
from gensim.models import LdaModel
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import nltk
import numpy as np

# Download nltk resources
nltk.download('stopwords')
nltk.download('punkt')

# Initialize Pinecone with gRPC
pc = Pinecone(api_key="YOUR_API_KEY")
index_name = "example-index"

# Check if the index exists, and create if it doesn’t
if index_name not in pc.list_indexes():
    from pinecone import ServerlessSpec
    pc.create_index(
        name=index_name,
        dimension=1536,  # Update based on embedding model
        metric="cosine",
        spec=ServerlessSpec(
            cloud="aws",
            region="us-east-1"
        )
    )

# Connect to the index
index = pc.index(index_name)

# Define stopwords and preprocessing function
stop_words = set(stopwords.words('english'))

def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    tokens = [word for word in tokens if word.isalpha() and word not in stop_words]
    return tokens

# Topic Modeling with LDA
def get_topics(texts, num_topics=3):
    # Preprocess texts
    processed_texts = [preprocess_text(text) for text in texts]
    
    # Create a dictionary and corpus for LDA
    dictionary = Dictionary(processed_texts)
    corpus = [dictionary.doc2bow(text) for text in processed_texts]
    
    # Train the LDA model
    lda_model = LdaModel(corpus, num_topics=num_topics, id2word=dictionary, passes=10)
    
    # Extract topics and keywords
    topics = []
    for idx, topic in lda_model.print_topics(num_words=3):
        topics.append(" + ".join([word.split("*")[1].replace('"', '') for word in topic.split(" + ")]))
    return topics

# Update Pinecone metadata
def update_pinecone_metadata(document_id, topics):
    metadata = {"topics": topics}
    index.update(id=document_id, set_metadata=metadata)
    print(f"Updated metadata for document {document_id} with topics: {topics}")

# Main function to perform topic modeling and update metadata
def process_document(document_id, document_text):
    # Extract topics
    topics = get_topics([document_text])
    
    # Update Pinecone metadata
    update_pinecone_metadata(document_id, topics)
    
    print("Document processed successfully.")

# Example usage
if __name__ == "__main__":
    # Example document ID and text
    document_id = "doc_123"
    document_text = "Your document text goes here..."
    
    # Process the document
    process_document(document_id, document_text)
