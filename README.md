# hodlinfo.com Clone

This project is a clone of the hodlinfo.com website. It involves creating a webpage using React for the frontend and implementing the backend using Node.js.

## Live Demo
[**Live link**](https://64810ccd5812e04d7399ed78--cheery-frangollo-58be8c.netlify.app/) <br>
[**Server link**](https://hodlinfo-clone-devang.onrender.com/)

## Video Preview

https://github.com/Devang2304/QuadBTech_task/assets/69463638/17719fdb-5629-417d-b86b-9a606fbb24fb

## Task Description

The task involved the following steps:

1. Creating a frontend using React to replicate the hodlinfo.com website.
2. Fetching the top 10 results from the provided API (https://api.wazirx.com/api/v2/tickers) in the backend server.
3. Storing the required data (name, last, buy, sell, volume, base_unit) from the top 10 results in a MongoDB database.
4. Implementing an API endpoint in the backend to retrieve the stored data and send it to the frontend.
5. Displaying the retrieved data on the frontend.

## Project Structure

The project consists of two main folders:

### Frontend

- Contains the React application for the frontend.
- Typical React project structure with components, styles, and other necessary files.
- `src` folder contains the main application code.
- `public` folder contains the index.html file and other static assets.

### Backend

- Contains the Node.js Express server for the backend.
- `server.js` file contains the Express server code and the implementation of API fetching and database operations.
- `routes.js` file contains routes required to get the data from the Database.
- `package.json` file contains project metadata and dependencies for the backend.

## Setup Instructions

To run this project on your local machine, follow these steps:

1. Clone the repository: `git clone <repository_url>`
2. Install dependencies for both frontend and backend:
   - For frontend: navigate to the `frontend` folder and run `npm install`.
   - For backend: navigate to the `backend` folder and run `npm install`.
3. Configure the MongoDB database connection in the backend's `server.js` file.
4. Run the backend server:
   - Navigate to the `backend` folder and run `npm start`.
   - The backend server will start running on `http://localhost:5000`.
5. Run the frontend application:
   - Navigate to the `frontend` folder and run `npm start`.
   - The frontend application will open in your browser at `http://localhost:3000`, automatically connecting to the backend server.

Note: Make sure you have Node.js installed on your machine.

If you have any questions or require further clarification, please feel free to reach out to me.
