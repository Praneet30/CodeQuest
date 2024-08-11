CodeQuest: Online Coding Judge Platform
Overview
CodeQuest is an Online Judge (OJ) platform built using the MERN stack (MongoDB, Express, React, Node.js). The platform is useful to both users and admin, providing distinct functionalities .

Features
User Login/Signup
View and Search Problems
Solve and get verdict for Problems
Solve problems using one of the supported languages: C++, Java, and Python.
Filter problems based on difficulty levels (easy, medium, hard).
Access to Leaderboard
Scores are calculated based on the problems solved and difficulty.
Submission History
User Profile

Admin Login
Access a comprehensive dashboard showcasing all platform statistics.
Monitor user activity.
View a list of all registered users.
Create new problems with detailed descriptions, constraints, input/output formats, and sample test cases.
Edit and Delete existing problems.

Tech Stack
Frontend: React.js with Tailwind CSS for styling
Backend: Node.js and Express.js
Database: MongoDB for data storage
Authentication: JWT (JSON Web Tokens) for secure authentication

Installation and Setup
Clone the Repository:

git clone https://github.com/Praneet30/CodeQuest
cd CodeQuest
Install Dependencies:

cd frontend
npm install
cd backend  
npm install
Environment Variables:
Create a .env file in the root directory of backend with the following variables:
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Run the Application in both frontend and backend:
npm start 

Deployment
Backend
Deployed on Render
Frontend
Deploy on Vercel:
Used Vercel to deploy the frontend application.

Access the Application:
The application can be accessed: https://codequest12.vercel.app/
