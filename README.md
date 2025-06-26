# ✍️ Guest Book Web App

A simple, elegant single-page Guest Book application built using **HTML**, **CSS**, **Vanilla JavaScript**, and **Supabase** for backend data storage. Users can leave their name, email, and a message. The entries are stored securely in a Supabase database and displayed in a neat table format.

---

## 🌐 Live Demo

🔗 **Live URL**: https://guest-book-application.pages.dev/
_Deployed via Cloudflare Pages_

---

## Screenshot
![image](https://github.com/user-attachments/assets/9d4a9100-6d14-480e-9e9d-c7c54a40f0f8)
![image](https://github.com/user-attachments/assets/88451ed2-388d-4bc4-83e4-d2f04baa3a46)
![image](https://github.com/user-attachments/assets/a568be9a-046e-4b6b-9c56-17f7263528a5)




---

## 📌 Project Overview

This project serves as a Frontend + Supabase integration assignment. It demonstrates:
- Tab-based single-page UI
- Data capture and storage using Supabase backend
- Display of stored guest entries (without the message)
- Secure and real-time form handling

---

## 📁 Folder Structure

guestbook-project/
│
├── index.html # Main page with Home and View Guests sections
├── style.css # Custom styles for layout and responsiveness
├── script.js # JavaScript for form handling and Supabase integration
├──  hero.jpg # AI-generated image for event hero section
├── supabase.js # Supabase configuration (URL & client setup)
└── README.md # Project details and setup instructions

---

## 🚀 Features

- 🖼️ Hero section with a static AI-generated image
- 📥 Form to enter Name, Email, and Message
- 📄 View tab to list guest entries in a clean table format
- 💾 Data stored and retrieved using Supabase's public APIs
- 📱 Responsive design using clean layout and styling

---

## ⚙️ Setup Instructions

### 🔧 Local Setup
1. Clone the repository:
   ```bash
   git clone  https://github.com/11PRIA/Guest_Book.git
Navigate into the project:

bash
Copy
Edit
cd guestbook
Open index.html directly in your browser.

🔐 Supabase Integration
🧱 Supabase Table: guest_entries
Column	Type	Description
id	UUID	Primary Key (auto-generated)
name	text	Guest name
email	text	Guest email
message	text	Message from guest
timestamp	timestamptz	Submission time (now())

📤 Insert & 📥 Fetch Logic (in script.js)
Insert: On form submission, data is sent to Supabase using the JS SDK.

Read: On View Guests tab, table is populated by fetching guest names and emails.

🔑 Supabase Credentials
These are public-safe and only allow SELECT and INSERT access, as enforced by Supabase RLS.

js
Copy
Edit
const SUPABASE_URL = "https://jfayoulvklkdinfaqtjw.supabase.co";
const SUPABASE_ANON_KEY = "your_anon_public_key_here";
RLS policies were enabled to allow public insert and select access only.

📄 CORS & Security Notes
API key (anon) is intended for frontend/public usage.

RLS (Row Level Security) policies are in place to ensure controlled access.

No service roles or secrets are exposed.

📝 Assumptions / Notes
Form validation is minimal for simplicity; can be extended.

No authentication is implemented — it's a public guestbook.

Only Name and Email are shown in the "View Guests" page as required.

🙋‍♂️ Author
Priyanka Kumari
GitHub: https://github.com/11PRIA
