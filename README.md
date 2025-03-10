# Meal Finder App

A React application that fetches seafood meal data from [TheMealDB API](https://www.themealdb.com/). The app displays a list of meal cards with images and names and features a live search functionality to filter meals by name.

## Features

- **API Data Fetching:** Retrieves seafood meals via an HTTP GET request.
- **Dynamic Search:** Filters the displayed meals based on user input.
- **Loading & Error Handling:** Provides user feedback during data fetch and in error scenarios.
- **Responsive UI:** Clean, component-based design for an optimal user experience.

## Technologies & Techniques

- **React:**  
  Utilized for building a modular, component-based user interface.

- **React Hooks:**

  - `useState` and `useEffect` manage component state and side effects.
  - A **custom hook (`useFecth`)** encapsulates API requests using Axios, handling asynchronous data fetching, loading states, and error handling.

- **Context API:**  
  Implements `MealsContext`, `DisplayedMealsContext`, and `SetDisplayedMealsContext` to share state across components without prop drilling.

- **Axios:**  
  Simplifies API calls to fetch meal data.

- **React Icons:**  
  Enhances UI with vector icons (e.g., the search icon).

- **CSS:**  
  Provides styling to ensure a visually appealing and responsive design.

## Project Structure

```plaintext
project-root/
├── src/
│   ├── components/
│   │   ├── Error.js          // Error component for handling API errors
│   │   ├── Loading.js        // Loading component while fetching data
│   │   ├── meal.js           // Displays individual meal cards
│   │   ├── meals.js          // Renders a list of Meal components
│   │   └── search-bar.js     // Contains search input and filtering logic
│   ├── hooks/
│   │   └── use-fetch.js      // Custom hook for fetching API data
│   ├── App.js                // Main application component
│   └── App.css               // Styling for the application
├── public/
│   └── index.html            // HTML template
└── package.json              // Project configuration and dependencies
```
