🌟 Blog Website 🌟


Overview

Welcome to the Blog Website project! This project allows users to create, read, update, and delete blog posts. It is built with a full-stack approach using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

✨ Features

📝 Create New Blog Posts: Users can write and publish new blog posts.
📚 Read Blog Posts: Users can browse and read existing blog posts.
✏️ Edit Blog Posts: Users can edit their previously published blog posts.
❌ Delete Blog Posts: Users can delete their blog posts.
🔍 Search Functionality: Users can search for blog posts by title.


💻 Technologies Used

Frontend:

HTML
CSS
JavaScript
EJS (Embedded JavaScript)

Backend:

Node.js
Express.js
Database:

MongoDB
Packages:

mongoose
body-parser


🚀 Installation

Prerequisites

Ensure you have the following installed:

Node.js
MongoDB


Sure! Here's the same README content with Markdown syntax that's designed to look good on GitHub.

🌟 Blog Website 🌟
Overview
Welcome to the Blog Website project! This project allows users to create, read, update, and delete blog posts. It is built with a full-stack approach using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.

✨ Features
📝 Create New Blog Posts: Users can write and publish new blog posts.
📚 Read Blog Posts: Users can browse and read existing blog posts.
✏️ Edit Blog Posts: Users can edit their previously published blog posts.
❌ Delete Blog Posts: Users can delete their blog posts.
🔍 Search Functionality: Users can search for blog posts by title.
💻 Technologies Used
Frontend:

HTML
CSS
JavaScript
EJS (Embedded JavaScript)
Backend:

Node.js
Express.js
Database:

MongoDB
Packages:

mongoose
body-parser
🚀 Installation
Prerequisites
Ensure you have the following installed:

Node.js
MongoDB
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/blog-website.git
cd blog-website
Install dependencies:

bash
Copy code
npm install
Set up MongoDB:

Ensure MongoDB is running on your local machine or update the connection string in app.js to match your MongoDB setup.
Run the application:

bash
Copy code
npm start
Open your browser:

Navigate to http://localhost:3000 to view the application.

📂 File Structure
arduino
Copy code
blog-website/
├── models/
│   └── blog.js
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   └── images/
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── show.ejs
│   └── edit.ejs
├── app.js
├── package.json
└── README.md
📖 Usage
Home Page
Displays a list of all blog posts with options to view, edit, or delete each post.
Create a New Blog Post
Navigate to the "Write A Blog" page.
Fill in the title and content of the new blog post.
Click "Submit" to publish the post.
Edit a Blog Post
Click the "Edit" button on the blog post you want to edit.
Update the title and content as needed.
Click "Save Changes" to update the post.
Delete a Blog Post
Click the "Delete" button on the blog post you want to delete.
Confirm the deletion to remove the post.
Search for a Blog Post
Use the search bar at the top of the page.
Enter the title of the blog post you are looking for.
View the filtered results.
