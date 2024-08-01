# Quiz App

A responsive quiz application built with Next.js, React, TypeScript, and styled-components.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/quiz-app.git
    cd quiz-app
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## Running Tests

1. Run the tests:
    ```sh
    npm test
    ```

2. For continuous testing during development:
    ```sh
    npm run test:watch
    ```

## Data Source

The data for the Quiz App is located in the `pages/api/data.json` file. This file contains a JSON object with quiz questions and answers.

## API Mock

The API mock is implemented in the `pages/api/mock.ts` file. This file provides endpoints to handle GET, POST, PUT, and DELETE requests for quiz data. The mock API uses the data from `data.json` and includes functions to clean and manipulate the data.
