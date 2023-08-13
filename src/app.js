import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import bodyParser from "body-parser";
import mysql from 'mysql2'
import {
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD
} from './config.js'
import myConnection from 'express-myconnection'
import session from "express-session";
import employeesRoutes from "./routes/employees.routes.js";
import indexApp from "./routes/indexApp.routes.js";
import login from './routes/login.routes.js';
import register from './routes/register.routes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))

app.use(myConnection(mysql, {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
}));

// routes
app.use(register)
app.use(login)
//more rutes
app.use(indexApp);
app.use("/api", employeesRoutes);

//
app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
