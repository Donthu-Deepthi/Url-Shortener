# URL Shortener

A dynamic web application built using **Node.js**, **Express**, **EJS**, and **MongoDB**.  
It demonstrates server-side rendering with EJS templates, database integration with MongoDB Atlas, and a clean MVC structure for maintainability.

---

## 🚀 Features
- **EJS Templates** for server-side HTML rendering
- **Express.js** for backend routing
- **MongoDB Atlas** for database storage
- **MVC Structure** (`models`, `views`, `controllers`)
- **Environment Variables** for secure credentials
- **Responsive UI** for better user experience

---

## 📂 Project Structure

├── models/ # Mongoose models for URLs
├── views/ # EJS templates for UI
├── server.js # Main application entry point
├── package.json # Dependencies and scripts
├── .gitignore # Ignored files
└── README.md # Project documentation

yaml
Copy
Edit

---

## 🛠 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/Donthu-Deepthi/Url-Shortener.git
cd Url-Shortener
Install dependencies

bash
Copy
Edit
npm install
Create a .env file in the root directory and add:

env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
PORT=3000
Run the application

bash
Copy
Edit
npm start
or

bash
Copy
Edit
node server.js
🌐 Deployment
This project can be deployed on:

Render

Railway

Cyclic

Deployment Steps:

Push your project to GitHub.

Connect your GitHub repo to your hosting platform.

Set MONGODB_URI and PORT in the hosting platform’s environment variables.

Deploy and get your live link.

📦 Dependencies
express – Web framework for Node.js

ejs – Templating engine

mongoose – MongoDB ODM

dotenv – Loads environment variables from .env

shortid – Generates short unique IDs for URLs (if used)

📷 Screenshots
Add screenshots of your app UI here.

📜 License
This project is licensed under the MIT License – feel free to use, modify, and share.

👩‍💻 Author
Donthu Deepthi

GitHub: @Donthu-Deepthi

Repository: URL Shortener
