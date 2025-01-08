# EquiSports

Visit the live website here: [EquiSports Live Site](https://assingment-10-6af28.web.app/)

---

## Overview
EquiSports is a responsive and dynamic e-commerce platform designed for sports enthusiasts. It provides a user-friendly interface for managing and showcasing sports equipment, offering features like product management, sorting, and personalized user experiences through authentication and theme toggling.

---

## Key React Concepts Used

### Core Concepts
1. **Functional Components**: Ensures modular and maintainable code.
2. **JSX**: Combines HTML and JavaScript to build interactive UIs.
3. **React Router**: Enables seamless navigation across pages such as Home, All Equipment, Add Equipment, etc.
4. **useState**: Manages state for input fields, modals, and theme toggling.
5. **useEffect**: Handles side effects like data fetching and theme persistence.
6. **Conditional Rendering**: Dynamically updates the UI based on user authentication and actions.
7. **Context API**: Manages global states for authentication and theme toggling.

---

## Features

1. **Responsive Design**: Optimized for mobile, tablet, and desktop.
2. **Dynamic Navbar**:
   - Displays login, register, or user details with logout options based on authentication.
3. **Theme Toggle**: Switch between light and dark modes with persistence.
4. **Product Management**:
   - Add, update, delete, and view detailed information about sports equipment.
5. **Interactive UI**:
   - Sorting functionality for products by price.
   - Custom 404 error page for invalid routes.
6. **Loading Spinners**: Smooth transitions during data fetching.

---

## Key Pages and Navigation

### 1. **Home Page**
   - Banner slider with engaging content.
   - Featured products section showcasing six popular items with "View Details" buttons.
   - Additional sections for trending products and sports categories.

### 2. **All Sports Equipment Page**
   - Displays all products in a table with details like name, category, and price.
   - Includes "View Details" functionality.
   - Sorting by price (ascending/descending).

### 3. **Add Equipment Page** (Private Route)
   - Allows users to add new sports equipment with a detailed form.
   - Fields include:
     - Image URL
     - Name
     - Category
     - Description
     - Price
     - Rating
     - Stock Status
     - Processing Time
     - User Info

### 4. **View Details Page** (Private Route)
   - Displays comprehensive information about a product in a visually appealing format.

### 5. **My Equipment List** (Private Route)
   - Lists all products added by the logged-in user.
   - Options to update or delete items.

### 6. **Update Equipment Page** (Private Route)
   - Pre-filled form for editing product details.
   - Displays success messages on submission.

### 7. **404 Error Page**
   - A custom-designed page for invalid routes.

---

## Functionality

### Product Management
- **Adding Products**: Add items via a detailed form.
- **Viewing Products**: Access detailed product information.
- **Updating Products**: Edit product details using a pre-filled form.
- **Deleting Products**: Delete items with confirmation modals.

### Sorting and Filtering
- **Sort by Price**: Sort products in ascending or descending price order.

### Authentication and Authorization
- **Conditional Navbar**: Updates dynamically based on the user’s authentication status.
- **Private Routes**: Secures sensitive pages like Add Equipment, My Equipment List, and Update Equipment.

### Theme Toggle
- **Light/Dark Mode**: Provides personalized experiences with persistence.

---

## Deployment

### Hosting Platforms
- **Backend**: Hosted on [Vercel](https://vercel.com/).
- **Firebase**: Manages authentication and secure domain authorization.

---

## Repository Links
- [GitHub Repository](https://github.com/IsmailHossen87/A10-Sports-Equipments)

---

## Additional Notes

1. **Environment Variables**:
   - Firebase and MongoDB credentials are securely managed via environment variables.

2. **Custom Notifications**:
   - Toast notifications for error and success messages.

---

Enjoy browsing **EquiSports**, your ultimate destination for sports equipment!
