## 🎬 Movies Search App

A full-featured movie search application built with React.js, styled using Tailwind CSS, and powered by the OMDb API. This app allows users to search for movies, view detailed information, filter by type, and manage a personalized favorites list.

---

## 📎 API Used:

- OMDB API : https://www.omdbapi.com/?i=tt3896198&apikey=e895cb9c

---

## ✨ Features:

- 🔍 Search for movies by title or keyword

- 🎞️ View detailed movie information

- ❤️ Add/remove movies from your favorites list

- 📂 Favorites page with persistent state

- 📄 Pagination for large datasets

- 🎚️ Filter by movie type (All, Movies, Series, Episodes) via API (no array.filter)

- 📦 Fully responsive and styled with Tailwind CSS

- 🧭 React Router for multi-page navigation

- ⚠️ Graceful error handling and fallback UI

- 🧭 Navbar with navigation links

- 👣 Footer section

---

## 🧰 Tech Stack:

| Technology           | Purpose                         |
| -------------------- | ------------------------------- |
| **ReactJS**          | Frontend library                |
| **React Router DOM** | Navigation and routing          |
| **Tailwind CSS**     | Styling and responsive layout   |
| **HTML/CSS**         | Base markup and design          |
| **JavaScript**       | Functionality and interactivity |
| **OMDb API**         | Data source for movie content   |

## 🧩 Key Components:

🔹 Navbar

- Links to:

  - Home (/)

  - Favorites (/favorites)

- Visible on all pages

🔹 SearchBar

- Search input for movie titles

- Controlled component with event handler

🔹 FilterDropdown

- Dropdown to filter by movie type

- Triggers new API calls when changed

🔹 MovieList

- Renders movie cards in a grid

- Includes pagination controls

🔹 MovieCard

- Displays title, poster, and year

- Clickable to open full details

🔹 MovieDetails

- Displays complete data for selected movie

- Uses useParams to get movie ID from route

🔹 Favorites

- Shows all favorited movies

- Option to remove items

🔹 Footer

- Simple footer at bottom of all pages

---

## 💖 Favorites Logic:

- Managed in React state or via localStorage

- Add/remove functionality via button toggle

- Available in Favorites page (/favorites)

- Favorites persist across navigation

---

## 🚨 Error Handling:

❌ Invalid search: “No results found.”

⚠️ API error: “Something went wrong. Please try again.”

🖼️ Missing poster: fallback image

🕸️ 404 routes redirect to home or show a custom message

---

## 🔧 Future Improvements:

- ✅ LocalStorage or IndexedDB persistence

- 🌑 Add Light/dark mode

- 🔍 Add more filters (Year, Genre)

- 💬 Show toast notifications

- 🧪 Lazy loading of movie posters

---

## 🙋‍♂️ Author & Contact:

- Developed by: Vignesh R

- GitHub: @VigneshRav

- Email: vignesh212000@gmail.com

---
