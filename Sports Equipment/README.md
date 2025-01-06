# EquiSports

Visit the live website here: [EquiSports Live Site](https://assingment-10-6af28.web.app/)

---

## Project Requirements

Refer to the detailed requirements document here: [EquiSports Requirements](https://docs.google.com/document/d/1zl97jEDUtdadOGwHSV_fP1gShCwCxwk6DDhQbEpcfHY/edit?tab=t.0)

---

## Key React Concepts Used

This project effectively utilizes core React concepts to deliver a dynamic and user-friendly e-commerce experience:

1. **Functional Components**: Modular design for reusable and maintainable code.
2. **JSX**: Combines JavaScript with HTML to build interactive UI components.
3. **React Router**: Provides seamless navigation for pages such as Home, All Equipment, Add Equipment, and more.
4. **useState**: Manages state for input fields, modals, and theme toggling.
5. **useEffect**: Handles side effects like fetching data and theme persistence.
6. **Conditional Rendering**: Dynamically shows UI elements based on user authentication or actions.
7. **Context API**: Manages global states for user authentication and theme toggling.

---

## State Management with Context API

**Global State Management**: Context API ensures seamless global state sharing across components:

- **Authentication State**: Manages user authentication and login/logout functionality.
- **Theme State**: Allows toggling between dark and light modes.
- **Error/Success Notifications**: Uses global state for toast notifications and success messages.

---

## Features

1. **Responsive Design**: Fully responsive for mobile, tablet, and desktop devices.
2. **Dynamic Navbar**:
   - Displays login, register, or user details with logout based on authentication state.
3. **Theme Toggle**: Easily switch between light and dark modes.
4. **Product Management**:
   - Add, update, delete, and view detailed information about sports equipment.
5. **Interactive UI**:
   - Sorting functionality for products based on price (ascending/descending).
   - 404 error page for unrecognized routes.
6. **Loading Spinners**: Ensures smooth transitions while fetching data.

---

## Key Pages and Navigation

1. **Home Page**:
   - Includes a banner slider with meaningful content.
   - Showcases six featured products with "View Details" buttons.
   - Includes additional sections for sports categories and trending products.

2. **All Sports Equipment Page**:
   - Displays all products in a table with details like name, category, and price.
   - Includes a "View Details" button for each product.
   - Sort functionality for ascending/descending price order.

3. **Add Equipment Page** (Private Route):
   - Allows users to add equipment using a detailed form.
   - Fields include Image URL, Name, Category, Description, Price, Rating, Customization, Stock Status, Processing Time, and User Info.

4. **View Details Page** (Private Route):
   - Displays all information about a product in a visually appealing format.

5. **My Equipment List** (Private Route):
   - Lists all equipment added by the logged-in user.
   - Includes options to update or delete equipment.

6. **Update Equipment Page** (Private Route):
   - Pre-filled form for editing product details.
   - Displays a success message upon submission.

7. **404 Error Page**:
   - Custom-designed page for invalid routes.

---

## Functionality

### Product Management

- **Adding Products**: Users can add new products via the "Add Equipment" form.
- **Viewing Products**: Detailed information is displayed on a dedicated "View Details" page.
- **Updating Products**: Update existing product details using a pre-filled form.
- **Deleting Products**: Users can delete products with a confirmation modal.

### Sorting and Filtering

- **Sort by Price**: Allows sorting products in ascending or descending price order.

### Authentication and Authorization

- **Conditional Navbar**: Adapts based on user authentication status.
- **Private Routes**: Pages like Add Equipment, My Equipment List, and Update are secured for logged-in users only.

### Theme Toggle

- **Light/Dark Mode**: Provides a personalized experience with theme persistence.

---

## Dynamic Page Title & Favicon

- **Dynamic Page Titles**: Each page updates the browser title for better context.
- **Custom Favicon**: A sports-themed favicon for better branding.

---

## Deployment

- **Backend**: Hosted on [Vercel](https://vercel.com/).
- **Firebase**: Handles authentication and secure domain authorization.

---

## Additional Notes

1. **Environment Variables**:
   - Firebase and MongoDB credentials are securely stored in environment variables.

2. **No Default Alerts**:
   - Custom toast or sweet alert messages are used for error and success notifications.

---

Enjoy browsing **EquiSports**, your ultimate destination for sports equipment!
