# Todos API

This is a RESTful API for managing Todo data.

## Table of Contents

-   [Prerequisites](#prerequisites)
-   [Getting Started](#getting-started)

    -   [Installation](#installation)
    -   [Configuration](#configuration)
    -   [Running the Application](#running-the-application)

-   [API Endpoints](#api-endpoints)

## Prerequisites

Before you begin, ensure you have met the following requirements:

-   **Node.js**: Ensure you have Node.js installed. Download it from [https://nodejs.org/](https://nodejs.org/).

## Getting Started

### Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/Emmybritt/todo-api.git

    ```

2. Change to the project directory:

    ```
    cd todo-api
    ```

3. Install project dependencies:

    ```
    yarn install
    ```

4. Create a .env file in the project root based on the .env.example template:

5. Running The application

    ```
    yarn run dev
    ```

The API should now be accessible at http://localhost:3333 (or the port you specified in your .env).

### API Endpoints

Below are the available API endpoints:

    ```bash
    GET /api/v1/todos: Get a list of all todos.
    GET /api/v1/todo/:id Get details of a specific todo.
    POST /api/v1/create/todo: Create a new todo.
    PATCH /api/v1/update-todo/:id Update details of a specific todo.
    DELETE /v1/delete-todo/:id Delete a todo.
    Example: To fetch all todos, make a GET request to http://localhost:3000/api/v1/todo.
    ```
