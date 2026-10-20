## React Marketplace

A responsive marketplace application built with React, allowing users to browse products, search and filter the catalogue, view product details, and manage a shopping cart.

## Features

- Product Catalogue – Fetches product data from the Fake Store API.
- Homepage – Features a welcome section, featured products, and product categories.
- Search Products – Search for products by name.
- Category Filtering – Filter products by category.
- Sorting – Sort products by price, from low to high or high to low.
- Product Details – View individual products on dynamic routes.
- Shopping Cart – Add products, increase or decrease quantities, and remove items.
- Cart Total – Automatically calculates the total price based on quantities.
- Persistent Cart – Saves cart contents in localStorage so they remain after refreshing the page.
- Reusable Components – Uses reusable React components to keep the code organised.
- Responsive Styling – Designed to provide a clean shopping experience across screen sizes.

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- React Router
- React Context API
- "useReducer" and React Hooks
- HTML5
- CSS3
- Fake Store API
- localStorage
- Git and GitHub

## Project Structure

src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── context/
│   ├── CartContext.jsx
│   └── CartReducer.js
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── Cart.jsx
│   └── ProductDetails.jsx
├── App.jsx
├── App.css
└── main.jsx

## Getting Started

Prerequisites

- Node.js
- npm

Installation

1. Clone the repository:
  
   git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate to the project folder:
  
   cd marketplace-app

3. Install dependencies:
  
   npm install

4. Start the development server:
  
   npm run dev

5. Open the local URL displayed in your terminal.

🌐 API

Product data is provided by the "Fake Store API" (https://fakestoreapi.com/).

## What I Learned

Through this project, I practised:

- Fetching and displaying API data in React.
- Building reusable components and passing props.
- Managing shared state with Context API and "useReducer".
- Implementing dynamic routes with React Router.
- Creating search, filtering, and sorting functionality.
- Managing shopping cart operations and calculating totals.
- Persisting application state with localStorage.
- Organising a React project into components, pages, and context.
- Using Git and GitHub throughout development.

## Future Improvements

- User authentication and accounts.
- Backend integration with Node.js and Express.
- Database integration for products and orders.
- Checkout and order management.
- Product reviews and ratings.

## Author

Lukasz Frankowski, as part of my portfolio.