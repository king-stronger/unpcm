import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import router from './router/routes.js';
import errorHandler from './middlewares/errorHandler.js';


// Reusable constant variables
const port = process.env.PORT || 5000;
const dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize the express app
const app = express();

// Set middleware to serve static files
app.use("/assets", express.static(path.join(dirname, "public/assets")));

// Set middlewares to handle the form and json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the view engine to ejs and the views folder
app.set("view engine", "ejs");
app.set("views", path.join(dirname, "views"));

// Routes
app.use(router);

// Handle Page not Found
app.use((req, res, next) => {
    const error = new Error("Page not Found !");
    error.status = 404;
    next(error);
});

// Handle Global Errors
app.use(errorHandler);

// Set the server to listen on a port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});