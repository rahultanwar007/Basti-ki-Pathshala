Basti Ki Pathshala – Volunteer Management System
Basti Ki Pathshala is a simple web app built to manage volunteer registrations for a community education initiative. It allows new volunteers to register through a form, and admins can view all the registered volunteers through a protected dashboard.

This project is made using Next.js (App Router), MongoDB, and Tailwind CSS. It focuses on clean design, real-world functionality, and user-friendly experience.

Features
For Volunteers:
Fill out a short form with your name, email, phone number, and address.

Get instant feedback on successful registration or any issues (like duplicate email or invalid inputs).

For Admin:
A basic login page to access the admin dashboard (password protected using sessionStorage).

View all volunteers in a clean table format.

See volunteer details like contact info and registration date.

Option to refresh the list or add more volunteers.

Tech Stack
Next.js 14 (App Router)

MongoDB with Mongoose

Tailwind CSS for styling

API Routes for handling form submissions and data fetching

How it Works
A volunteer registers through /register.

Their details are stored in MongoDB after validation.

Admin logs in via /admin/login using a password (default: admin123).

Admin dashboard at /admin shows all registered volunteers.

Folder Structure Overview
app/api/volunteers/route.ts → Handles POST and GET requests for volunteer data.

components/ui → Contains reusable UI components like buttons and stat cards.

models/Volunteer.ts → Mongoose schema for storing volunteer details.

lib/mongodb.ts → MongoDB connection logic.

app/(routes) → Pages like register, admin login, and dashboard.
