import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';


// Reusable constant variables
const port = process.env.PORT || 5000;
const dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize the express app
const app = express();

// Set middleware to serve static files
app.use(express.static(path.join(dirname, "public")));

// Set middlewares to handle the form and json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the view engine to ejs and the views folder
app.set("view engine", "ejs");
app.set("views", path.join(dirname, "views"));

// Routes
app.get("/", (req, res, next) => {
    res.render("index");
});

// Set the server to listen on a port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});