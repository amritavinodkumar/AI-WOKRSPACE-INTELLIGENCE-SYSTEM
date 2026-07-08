# AI Workspace Intelligence System (NeuroDesk)

AI Workspace Intelligence System (NeuroDesk) is a document management platform currently being developed using FastAPI and React. The project aims to provide a centralized workspace where users can organize documents, manage folders, and integrate AI-powered features for document understanding and analysis.

The current version focuses on building a scalable backend architecture and a responsive frontend that can be extended with additional AI capabilities in future iterations.

---

## Features

### Implemented

- User authentication using JWT
- Workspace and folder management
- Document upload functionality
- RESTful API using FastAPI
- React-based frontend
- SQLite database integration
- SQLAlchemy ORM
- Modular backend architecture

### Planned

- AI document summarization
- Semantic document search
- OCR support
- Document classification
- AI assistant for document interaction
- Analytics dashboard
- PostgreSQL support
- Multi-user collaboration

---

## Technology Stack

### Backend

- Python
- FastAPI
- SQLAlchemy
- SQLite
- JWT Authentication

### Frontend

- React
- Vite
- JavaScript
- HTML
- CSS

---

## Project Structure

```
AI-Workspace-Intelligence-System
│
├── backend
│   ├── app
│   ├── routes
│   ├── models
│   ├── services
│   ├── database
│   └── main.py
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
├── README.md
└── requirements.txt
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/<username>/AI-Workspace-Intelligence-System.git
```

### Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

### Frontend

```bash
cd frontend

npm install
npm run dev
```

---

## Architecture

```
React Frontend
       │
 REST API
       │
 FastAPI Backend
       │
 SQLAlchemy
       │
 SQLite
```

The application follows a layered architecture where the frontend communicates with the backend through REST APIs. SQLAlchemy is used as the ORM layer, allowing the database to be replaced with PostgreSQL in future deployments with minimal changes.

---

## Future Improvements

- AI-powered document analysis
- LLM integration
- Semantic search
- OCR pipeline
- Cloud deployment
- Role-based access control
- Analytics and reporting

---

## License

This project is currently under development for educational purposes.
