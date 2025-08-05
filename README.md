# Brainly - Knowledge Sharing Platform

Brainly is a modern web application designed for sharing and organizing knowledge through various content types including text, images, YouTube videos, and more. The platform features user authentication, content management, and an intuitive UI built with React and TypeScript.

## 🌟 Features

- **User Authentication**
  - Secure signup and login functionality
  - Protected routes for authenticated users
  - JWT-based authentication

- **Content Management**
  - Create and organize different types of content
  - Support for text, images, YouTube videos, and more
  - Responsive card-based layout

- **Modern UI/UX**
  - Clean and intuitive interface
  - Responsive design for all devices
  - Smooth animations and transitions

## 🚀 Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: React Context API
- **UI Components**: Custom built with Tailwind
- **Icons**: Custom SVG icons

### Backend
- **Runtime**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **API**: RESTful API design
- **Security**: bcrypt for password hashing

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd brainly-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend root with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd brainly-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend root with:
   ```env
   VITE_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 📂 Project Structure

```
brainly/
├── brainly-backend/         # Backend server
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── middleware/      # Custom middleware
│   │   └── app.ts           # Express app setup
│   └── package.json
│
└── brainly-frontend/        # Frontend application
    ├── src/
    │   ├── components/      # Reusable components
    │   ├── pages/           # Page components
    │   ├── hooks/           # Custom React hooks
    │   ├── context/         # React context providers
    │   ├── utils/           # Utility functions
    │   └── App.tsx          # Main application component
    └── package.json
```

## 🔒 Authentication Flow

1. User signs up with email and password
2. Backend hashes the password and creates a new user
3. JWT token is generated and sent to the client
4. Token is stored in localStorage/sessionStorage
5. Protected routes verify the token on each request

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

### Content
- `GET /api/content` - Get all content
- `POST /api/content` - Create new content
- `GET /api/content/:id` - Get single content
- `PUT /api/content/:id` - Update content
- `DELETE /api/content/:id` - Delete content

```

