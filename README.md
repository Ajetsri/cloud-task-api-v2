# Cloud Task API V2

A RESTful Task Management API built with Node.js, Express, and MongoDB.

## Features

- REST API using Express.js
- MongoDB Atlas integration
- Environment variable support using dotenv
- MVC project structure
- Scalable folder architecture
- Ready for AWS deployment

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Nodemon

## Project Structure

```
cloud-task-api-v2/
│
├── config/
│   └── db.js
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Prerequisites

Before running this project, install:

- Node.js
- npm
- Git
- MongoDB Atlas Account
- Visual Studio Code

## Installation

### Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/cloud-task-api-v2.git
```

### Navigate to the project

```bash
cd cloud-task-api-v2
```

### Install dependencies

```bash
npm install
```

### Create a .env file

Create a `.env` file in the project root.

Example:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### Run the application

Development mode

```bash
npm run dev
```

Production mode

```bash
npm start
```

## Current Status

- [x] Project initialized
- [x] Dependencies installed
- [x] Folder structure created
- [x] Environment configuration added
- [ ] Express server
- [ ] MongoDB connection
- [ ] CRUD APIs
- [ ] Error handling
- [ ] Validation
- [ ] Authentication
- [ ] AWS Deployment

## Author

Tejasri Sirigineedi