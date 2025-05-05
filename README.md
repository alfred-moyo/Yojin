# Career Co-Pilot

An AI-powered career development platform that helps users identify skill gaps, discover personalized learning paths, and prepare for job opportunities.

## Features

- Resume analysis and skill extraction using NLP
- Personalized job role recommendations
- Custom learning path suggestions
- Real-time AI career assistant chatbot
- Interview preparation simulation
- Secure user authentication and profile management

## Project Structure

- `/client` - React frontend application
- `/server` - Node.js Express backend API
- `/ml-services` - Python-based ML microservices for AI tasks

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (3.8+)
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies for each component:

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install

# ML Services
cd ../ml-services
pip install -r requirements.txt
```

3. Set up environment variables (see .env.example files in each directory)
4. Start the development servers

## Development

### Starting the servers

```bash
# Frontend
cd client
npm start

# Backend
cd ../server
npm run dev

# ML Services
cd ../ml-services
python app.py
```

## Deployment

The application is configured for deployment on platforms like Vercel (frontend) and Render (backend/ML services).

## License

MIT
