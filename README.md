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

- `/client` - React frontend application with TypeScript
- `/server` - Node.js Express backend API with TypeScript
- `/ml-services` - Python-based ML microservices for AI tasks

## Current Status

The project is currently under active development:
- Frontend: Basic React setup completed with TypeScript template
- Backend: Express server with TypeScript, MongoDB connection, and user authentication setup
- ML Services: To be implemented

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (3.8+)
- MongoDB (running locally or cloud instance)

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

# ML Services (Coming Soon)
cd ../ml-services
pip install -r requirements.txt # Not yet implemented
```

### Environment Setup

Create a `.env` file in the server directory with the following configuration:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/career-co-pilot
JWT_SECRET=your_secret_key_here
```

## Running the Application

### Frontend

```bash
cd client
npm start
```
This will start the React development server at http://localhost:3000

### Backend

You need to set up the package.json scripts first. In the server directory, update your package.json to include:

```json
"scripts": {
  "start": "node dist/index.js",
  "dev": "ts-node src/index.ts",
  "build": "tsc",
  "watch": "nodemon --exec ts-node src/index.ts"
}
```

Then run:

```bash
cd server
npm run dev
```
This will start the backend server at http://localhost:5000

### ML Services

The ML services are not yet implemented. This part will be developed to handle:
- Resume parsing and analysis
- Skill extraction and ranking
- Job matching algorithms
- Recommendation systems

## Deployment

The application is configured for deployment on platforms like Vercel (frontend) and Render (backend/ML services).

## License

MIT
