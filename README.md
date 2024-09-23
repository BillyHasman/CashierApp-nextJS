# CashierApp

This is a cashier application built using **Next.js** for the frontend and **Tailwind CSS** for styling. The backend uses **JSON Server** to simulate a simple REST API for handling data.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Project](#running-the-project)
  - [Start the Frontend](#start-the-frontend)
  - [Start the Backend](#start-the-backend)

## Requirements

Before you start, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [JSON Server](https://www.npmjs.com/package/json-server)

## Installation

1.  Clone this repository:

    ```bash
    git clone https://github.com/your-username/cashierApp.git
    cd cashierApp
    ```

2.  Install dependencies for the frontend:

    ```bash
    npm install
    ```

3.  Install Tailwind CSS if it's not already installed:

    ```bash
    npm install -D tailwindcss
    ```

4.  Set up Tailwind CSS by creating the configuration file:

    bash
    npx tailwindcss init

    Tailwind should be set up in your globals.css file:
    bash
    css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

## Running the Project

### Start the Frontend

To run the Next.js app, use the following command:

    npm run dev

This will start the development server for the frontend, typically running at http://localhost:3000.

### Start the Backend

Navigate to the cashier-backend directory:

    cd cashier-backend

### Start the JSON Server with the following command:

    npx json-server db.json --port=3004

The JSON Server will run at http://localhost:3004 and provide RESTful API routes based on your db.json.

## Additional Notes

- The frontend is built using Next.js, and Tailwind CSS is used for styling.
- The backend is a mock API server using JSON Server, simulating RESTful endpoints using a simple - - JSON file (db.json).

## Commands Overview

- Frontend: npm run dev (Next.js server)
- Backend: npx json-server db.json --port=3004 (JSON Server)
