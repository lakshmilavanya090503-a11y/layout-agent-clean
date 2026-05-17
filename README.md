# Layout Agent

An AI-powered layout editing tool that allows users to modify UI layouts through natural language prompts.

Built with React, Node.js, Express, and OpenAI API.

---

## Features

- AI-driven layout editing
- Real-time chat interface
- JSON layout visualization
- Wireframe preview rendering
- Dynamic UI updates from prompts

---

## Live Demo

https://layout-agent-clean-brown.vercel.app/

---

## Tech Stack

### Frontend
- React
- Vite
- CSS

### Backend
- Node.js
- Express
- OpenAI API

---

## Project Structure

```bash
layout-agent/
│
├── client/        # React frontend
├── server/        # Express backend
└── README.md
```

---

## Getting Started

### 1. Clone Repository

```bash
git clone <your-repo-url>
cd layout-agent
```

### 2. Install Dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

---

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
OPENAI_API_KEY=your_api_key_here
```

---

## Run the Application

### Start Backend

```bash
cd server
node index.js
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## Future Enhancements

- Drag-and-drop editing
- Responsive layout generation
- Persistent conversations
- Multi-page support
- Deployment pipeline

---

## Author

Lakshmi Lavanya
