# 🛒 PERN Store

A full-stack e-commerce web application built with the **PERN stack** — PostgreSQL, Express.js, React.js, and Node.js.

The project provides a complete shopping experience with authentication, product browsing, cart management, checkout, orders, reviews, and payment integration workflows.

---

## 📸 Features

- 🔐 User Authentication
  - User registration and login
  - JWT-based authentication
  - Password encryption
  - Google OAuth integration

- 🛍️ Product Management
  - Browse products
  - Product details
  - Product reviews and ratings
  - Product data stored in PostgreSQL

- 🛒 Shopping Cart
  - Add products to cart
  - Update product quantity
  - Remove products
  - Cart total calculation

- 📦 Order Management
  - Checkout workflow
  - Address management
  - Order creation
  - Order history

- 💳 Payment Integration
  - Stripe payment workflow
  - Paystack payment workflow
  - Test payment integration structure

- 👤 User Account
  - Profile management
  - Order history
  - Authentication state

- 📧 Email & Authentication Services
  - Nodemailer integration
  - Google OAuth authentication

- 🔒 Security
  - JWT access and refresh tokens
  - Password hashing with bcrypt
  - Helmet security middleware
  - CORS configuration
  - HTTP cookie support

- 📚 API Documentation
  - Swagger API documentation

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- React Hook Form
- React Feather
- Windmill React UI
- React Hot Toast

### Backend

- Node.js
- Express.js
- PostgreSQL
- REST APIs
- JWT Authentication
- bcrypt
- Nodemailer
- Google OAuth
- Swagger

### Payment

- Stripe
- Paystack

### Development Tools

- Git & GitHub
- ESLint
- Prettier
- Nodemon
- Render

---

## 📁 Project Structure

```text
PERN-Store/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── helpers/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── docs/
│   ├── helpers/
│   ├── middleware/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── __tests__/
│   ├── app.js
│   ├── index.js
│   └── package.json
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md