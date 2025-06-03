#  YouTube Clone – MERN Stack Capstone Project

##  Overview

This project is a full-stack **YouTube Clone** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. It allows users to **view, search, like/dislike, comment on videos**, and **manage channels**. The app also includes **JWT-based user authentication**, video CRUD operations, and a responsive UI inspired by YouTube.

##  Features

###  Frontend (React)
-  YouTube-style Header and Sidebar
-  Toggle-able sidebar from hamburger icon
-  Grid display of video thumbnails
-  Video card shows Title, Thumbnail, Channel Name, and Views
-  JWT-based user login and registration
-  Google Form link for login/signup simulation
-  Search videos by title
-  Filter videos by category
-  Video Player page with:
  - Video Player
  - Title, Description, Like/Dislike buttons
  - Comment Section (Add, Edit, Delete)
-  Channel Page:
  - Create/Edit/Delete user videos
  - Display all videos uploaded by that channel
-  Fully Responsive (Mobile/Tablet/Desktop)

###  Backend (Node.js + Express.js)
-  User authentication with JWT
-  REST API for:
  - Users (register, login)
  - Channels (create, fetch, update)
  - Videos (create, update, delete, list)
  - Comments (add, delete, update, list)
-  Secure protected routes using JWT

###  Database (MongoDB)
- Stores user info, video metadata, channel details, and comments.
- Sample video and user data provided.

---

##  Tech Stack

| Layer         | Technology               |
|---------------|---------------------------|
| Frontend      | React.js, Axios, React Router |
| Backend       | Node.js, Express.js       |
| Database      | MongoDB (Atlas/local)     |
| Authentication| JWT (JSON Web Tokens)     |
| Styling       | CSS, Responsive Design    |
| Version Control | Git, GitHub              |

---

##  Getting Started

### ⚙️ Prerequisites

- Node.js & npm
- MongoDB Atlas (or local MongoDB)
- Git

###  Installation
# Backend
cd server
npm install

# Frontend
cd ../Youtube_clone
npm install

# Terminal 1 - Start Backend
cd server
npm run dev

# Terminal 2 - Start Frontend
cd client
npm start


#### 1. Clone the repository

```bash
git clone https://github.com/MBARC132/YouTube_Clone


  for youtube video
  <iframe
                                 className="Display_video"   
                                 src={`https://www.youtube.com/embed/${data.videoLink.split("v=")[1]}`}
                                 title={data.title}
                                //  frameBorder="0"
                                //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                 allowFullScreen
                            ></iframe>