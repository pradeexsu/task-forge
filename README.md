# Task Manager Application

This is a frontend application for managing tasks, built with Vite, DaisyUI, React, Tailwind CSS, TypeScript, and Zustand.

[![UI Application CI](https://github.com/pradeexsu/task-forge/actions/workflows/ci.yml/badge.svg)](https://github.com/pradeexsu/task-forge/actions/workflows/ci.yml) &nbsp; [![Backend Service CI](https://github.com/pradeexsu/task-forge-service/actions/workflows/docker-image.yml/badge.svg)](https://github.com/pradeexsu/task-forge-service/actions/workflows/docker-image.yml)

### Features

- **Task Management**: Easily create, update, delete, and mark tasks as completed.
- **Responsive Design**: The application is responsive and works well on various screen sizes.
- **State Management**: Uses Zustand for state management, providing a predictable and efficient way to manage application state.
- **Modern Stack**: Built with modern frontend technologies including React, TypeScript, and Tailwind CSS for a fast and enjoyable development experience.
- **Backend Service**: The application relies on an Express.js [Task Manager Service](https://github.com/pradeexsu/task-forge-service?tab=readme-ov-file#task-manager-service) written in TypeScript, utilizing Prisma for database management with PostgreSQL, and containerized using Docker for seamless deployment.

### Prerequisites

Before running the application, ensure you have the following installed on your machine:

- Node.js and npm
- Git

### Getting Started

To get started with the Task Manager frontend application, follow these steps:

1. Install dependencies using npm or yarn:

```
npm install
```

2. Start the development server:

```
npm run dev
```

3. Open your browser and visit http://localhost:5173/ to view the application.

### Project Structure

- **src/components**: Contains React components used to build the UI.
- **src/hooks**: Custom hooks used for various functionalities.
- **src/store**: Zustand store setup and state management logic.
- **src/styles**: Global styles and Tailwind CSS configurations.
- **src/utils**: Utility functions and helper methods.

---

### Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests to help improve this project.

### License

This project is licensed under the MIT License.

Feel free to customize this README to fit your project's specific details and requirements. Good luck with your Task Manager frontend application!
