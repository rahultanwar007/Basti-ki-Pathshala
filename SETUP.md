# Basti Ki Pathshala - Setup Instructions

## Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up MongoDB:**
   - Install MongoDB locally, or
   - Use MongoDB Atlas (cloud service)
   - Create a database named `basti-ki-pathshala`

3. **Environment Variables:**
   Create a `.env.local` file in the root directory with:
   ```
   MONGODB_URI=mongodb://localhost:27017/basti-ki-pathshala
   ```
   
   For MongoDB Atlas, use:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/basti-ki-pathshala
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Features

### 🏠 Home Page
- Beautiful landing page with mission statement
- Navigation to registration and admin panel
- Responsive design

### 📝 Volunteer Registration (`/register`)
- Form to collect volunteer details:
  - Full Name
  - Email Address
  - Contact Number
  - Address
- Form validation and success messages
- Automatic redirect after successful registration

### 👨‍💼 Admin Dashboard (`/admin/login`)
- **Password Protected**: Default password is `admin123`
- View all registered volunteers
- Sort by registration date (newest first)
- Responsive table design
- Quick actions to add new volunteers or refresh list
- Logout functionality

### 🔧 Backend API
- RESTful API endpoints:
  - `POST /api/volunteers` - Register new volunteer
  - `GET /api/volunteers` - Fetch all volunteers
- MongoDB integration with Mongoose
- Error handling and validation

## Database Schema

```javascript
Volunteer {
  name: String (required)
  email: String (required, lowercase)
  contactNo: String (required)
  address: String (required)
  createdAt: Date (auto-generated)
}
```

## File Structure

```
src/
├── app/
│   ├── api/volunteers/
│   │   └── route.ts          # API endpoints
│   ├── admin/
│   │   └── page.tsx          # Admin dashboard
│   ├── register/
│   │   └── page.tsx          # Registration form
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx              # Home page
├── lib/
│   └── mongodb.ts            # Database connection
└── models/
    └── Volunteer.ts          # Mongoose model
```

## Usage

1. **For Volunteers:**
   - Visit the home page
   - Click "Register to Volunteer" or "Become a Volunteer"
   - Fill out the registration form
   - Submit to register

2. **For Admins:**
   - Visit `/admin/login` or click "Admin Panel" from home page
   - Enter the admin password (default: `admin123`)
   - View all registered volunteers
   - Use "Add New Volunteer" to manually add volunteers
   - Use "Refresh List" to update the view
   - Use "Logout" to exit admin panel

## Technologies Used

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB with Mongoose ODM
- **Styling:** Tailwind CSS with custom gradients and animations

## Deployment

The app can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any platform supporting Node.js

Remember to set the `MONGODB_URI` environment variable in your deployment platform. 