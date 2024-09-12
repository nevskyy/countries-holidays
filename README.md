# Countries-holidays

## Overview
This project is a web application that allows users to search for countries and retrieve detailed information about their public holidays. The app integrates a country search feature and displays holiday data using a clean and user-friendly interface.

### Features:
- Search for countries by name 
- View public holidays for selected countries.
- Interactive and responsive design
- Uses external APIs for real-time holiday data
- [API Documentation for Countries](https://date.nager.at/swagger/index.html)
- [API Documentation for used flags](https://flagsapi.com/#quick)

## Technologies
- Frontend framework (e.g., Angular)
- Backend setup (e.g., Node.js)
- HTML, CSS, JavaScript




## Installation

Follow the steps below to install and run the project on your local machine.

### Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js** (v14+)
- **Angular CLI** (if applicable) `npm install -g @angular/cli`

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/nevskyy/country-holidays.git
    cd project-name
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the root directory of the project, or use Angular's `environment.ts` files to store API keys, base URLs, and other environment-specific values.
    - Example for `.env`:
      ```bash
      API_BASE_URL=https://api.example.com
      API_KEY=your-api-key
      ```

4. **Running the application:**
    - For development:
      ```bash
      ng serve
      ```
    - For production:
      ```bash
      ng build --prod
      ```

5. **Navigate to the app:**
    Once the application is running, open your browser and go to:
    ```bash
    http://localhost:4200
    ```

## Usage

Provide examples and instructions for how to use the application. Include details on navigating key features or any login credentials (if applicable).

## Additional Libraries / Frameworks

List any additional libraries or frameworks used in the project, for example:
- **Angular Material**: For UI components
- **RxJS**: For handling asynchronous data streams
- **Bootstrap**: For responsive layout and design

## Contribution

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.