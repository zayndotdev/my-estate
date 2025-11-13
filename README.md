# 🏠 Real Estate Application

A full-stack real estate application built with React and Node.js, featuring user authentication, profile management, and a modern UI.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Status](#project-status)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- 🔐 **User Authentication**
  - User registration (Sign Up)
  - User login (Sign In)
  - JWT-based authentication with httpOnly cookies
  - Secure password hashing with bcryptjs

- 👤 **User Management**
  - User profile page
  - Redux state management for user data
  - Persistent user session with localStorage

- 🎨 **Modern UI**
  - Built with React 19 and Tailwind CSS
  - Responsive design
  - Toast notifications for user feedback
  - React Router for navigation

## 🛠 Tech Stack

### Frontend
- **React** 19.1.1 - UI library
- **Vite** 7.1.7 - Build tool and dev server
- **Redux Toolkit** 2.10.1 - State management
- **React Router DOM** 7.9.5 - Routing
- **Tailwind CSS** 4.1.16 - Styling
- **Axios** 1.13.2 - HTTP client
- **React Toastify** 11.0.5 - Toast notifications
- **React Icons** 5.5.0 - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** 5.1.0 - Web framework
- **MongoDB** with **Mongoose** 8.19.3 - Database
- **JWT** (jsonwebtoken) 9.0.2 - Authentication
- **bcryptjs** 3.0.3 - Password hashing
- **Cookie Parser** 1.4.7 - Cookie handling
- **CORS** 2.8.5 - Cross-origin resource sharing
- **dotenv** 17.2.3 - Environment variables

## 📁 Project Structure

```
real-estate-main/
├── api/                    # Backend API
│   ├── controllers/        # Request handlers
│   │   ├── auth.controller.js
│   │   └── user.controller.js
│   ├── models/             # Database models
│   │   ├── auth.model.js
│   │   └── user.model.js
│   ├── routes/             # API routes
│   │   ├── auth.route.js
│   │   └── user.route.js
│   ├── utils/              # Utility functions
│   │   └── error.js
│   └── index.js            # Server entry point
│
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Header.jsx
│   │   │   └── index.js
│   │   ├── pages/          # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── About.jsx
│   │   │   └── index.js
│   │   ├── redux/          # Redux store and slices
│   │   │   ├── store.js
│   │   │   └── user/
│   │   │       └── userSlice.js
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── package.json            # Root package.json (backend)
└── README.md
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zayndotdev/real-estate.git
   cd real-estate-main
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

## ⚙️ Configuration

1. **Create a `.env` file in the root directory** with the following variables:

   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

   **Example:**
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/real-estate
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

   > **Note:** For MongoDB Atlas, use a connection string like:
   > `mongodb+srv://username:password@cluster.mongodb.net/real-estate?retryWrites=true&w=majority`

2. **Update API base URL** (if needed)
   
   If your backend runs on a different port, update the API base URL in your frontend API calls.

## 🏃 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   npm run dev
   ```
   The server will run on `http://localhost:4000` (or your configured PORT)

2. **Start the frontend development server** (in a new terminal)
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173` (Vite default port)

### Production Mode

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start the backend server**
   ```bash
   npm start
   ```

## 🔌 API Endpoints

### Authentication Routes

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| POST | `/api/auth/signup` | Register a new user | `{ username, email, password }` |
| POST | `/api/auth/signin` | Login user | `{ email, password }` |

### User Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/test` | Test user endpoint |

### Response Format

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "user": { ... }
}
```

**Error Response:**
```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message"
}
```

## 📝 Project Status

### ✅ Completed Features
- User registration and authentication
- JWT-based session management
- Redux state management setup
- Basic routing (Home, Sign In, Sign Up, About, Profile)
- Error handling middleware
- Password hashing and validation
- Toast notifications

### 🚧 In Progress / Planned Features
- Property listing functionality
- Property search and filters
- User profile management
- Property details pages
- Image upload functionality
- Advanced authentication features (password reset, email verification)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

- GitHub: [@zayndotdev](https://github.com/zayndotdev)

## 📞 Support

If you have any questions or issues, please open an issue on the [GitHub repository](https://github.com/zayndotdev/real-estate/issues).

---

**Note:** Make sure to keep your `.env` file secure and never commit it to version control. Add `.env` to your `.gitignore` file.
