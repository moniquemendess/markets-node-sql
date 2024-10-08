# Markets Node SQL

**Markets Node SQL** is a backend application for market management, developed using Node.js and a SQL database. The project provides an API for basic CRUD (Create, Read, Update, Delete) operations focusing on products and other market-related entities.

## Technologies Used

- **Node.js**: JavaScript runtime environment for server-side execution.
- **MySQL**: Relational database management system.
- **Express**: Framework for Node.js to facilitate API creation.
- **mysql2**: Library for connecting and interacting with MySQL database.

## Project Structure

- **`src/`**: Contains all the project source code.
  - **`api/`**:
    - **`controllers/`**: Contains functions that handle requests and responses.
    - **`services/`**: Contains business logic and interacts directly with the database.
    - **`routes/`**: Defines API routes and maps them to controllers.
  - **`db/`**: Contains the configuration file for the database connection.
  - **`server.js`**: Main file to initialize the Express server.

## Prerequisites

- Node.js and npm (Node Package Manager) installed.
- MySQL installed and configured.
- A MySQL database created and configured.

## Installation

