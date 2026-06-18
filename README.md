# FakeStore E-Commerce App

## Overview

This project is a responsive e-commerce application built with React, React Router, and the FakeStore API. It allows users to browse products, view details, and simulate full CRUD operations (Create, Read, Update, Delete) using a mock API.

The app also includes cart functionality, admin-only controls, and a custom-designed UI with a handcrafted, earthy aesthetic.

---

## Features

### Home Page

* Hero section with overlay content
* Navigation to product listings

### Product Listing

* Fetches products from FakeStore API
* Responsive grid layout using React Bootstrap
* Product cards with image, title, price, and actions

### Product Details

* Displays full product information
* Add to cart functionality
* Admin-only edit access

### Add Product

* Form to create new products (POST request)
* Confirmation feedback
* Redirects to product list

### Edit Product

* Pre-filled form with product data
* Update (PUT) and Delete (DELETE) actions
* Confirmation modal for deletion

### Cart

* Add/remove items
* Quantity controls
* Persistent cart using localStorage
* Toast notification when items are added

### Authentication (Mock)

* Admin login (username: `admin`, password: `password`)
* Unlocks add/edit/delete functionality
* Persisted via localStorage

### Navigation

* Responsive navbar
* Mobile hamburger menu
* Cart status indicator

---

## Tech Stack

* React (Vite)
* React Router
* Axios
* React Bootstrap
* Context API (Cart & Auth)
* CSS (custom theming)

---

## Styling

Custom global styling includes:

* Earthy color palette
* Serif typography
* Soft shadows and hover effects
* Subtle paper texture background

---

## API Notes

FakeStore API is a mock API:

* POST, PUT, DELETE requests return success responses
* Data is **not persisted**
* This app demonstrates frontend handling of these operations

---

## Getting Started

```bash
npm install
npm run dev
```

---

## Project Structure

```
src/
  components/
  pages/
  context/
  services/
  styles.css
```

---

## Project Requirements Met

* ✔ Component-based architecture
* ✔ React Router navigation
* ✔ API integration (GET, POST, PUT, DELETE)
* ✔ Loading and error handling
* ✔ Responsive design with Bootstrap
* ✔ State management with useState + Context

---

## Future Improvements

* Real authentication system (JWT/Firebase)
* Backend integration for persistent data
* Product search and filtering
* Wishlist/favorites feature
* Improved form validation
* Image fallback handling
* Unit testing (Vitest)
* Data caching with React Query

---

## Lessons Learned

* Structuring scalable React applications
* Managing shared state with Context API
* Handling async API interactions
* Building responsive layouts with Bootstrap
* Using AI as a development assistant for debugging and optimization

---

## Acknowledgements

* FakeStore API for mock backend
* React Bootstrap for UI components
* OpenAI ChatGPT for development assistance

---
