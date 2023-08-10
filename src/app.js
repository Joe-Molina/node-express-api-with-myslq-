import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexApp from './routes/indexApp.routes.js'
import ejs from "ejs";
import bodyParser from 'body-parser'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use(indexApp);
app.use("/api", employeesRoutes);

//
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
