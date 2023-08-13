import { pool } from "../db.js";
import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import session from "express-session";
import myConnection from 'express-myconnection'

const now = moment().format("MMMM Do YYYY, h:mm:ss a");

export const getNotes = async (req, res) => {
  if (req.session.loggedin == true) {
    const user = req.session.name;
    const email = req.session.email;

    const [rows] = await pool.query("SELECT * FROM notes");

    req.getConnection((err, conn) => {
      conn.query("SELECT id FROM users WHERE email = ?",
      [email],
      (err, userdata) => {



        console.log(userdata[0])

        req.session.idUser = userdata[0].id

        conn.query('SELECT * FROM notes WHERE userId = ?',
        [req.session.idUser],
        (err, userdata) => {
          console.log(userdata)

          res.render("index.ejs", {notes: userdata, user, idUser: req.session.idUser});

        })

      });
    })

  } else {
    res.redirect("/login");
  }
};

export const getNote = async (req, res) => {};

export const createNote = async (req, res) => {
  const { title, content, userId } = req.body;

  console.log(title);

  const [rows] = await pool.query(
    "INSERT INTO notes(title, content, createdAt, userId) VALUES (?, ?, ?, ?)",
    [title, content, now, req.session.idUser]
  );

  console.log(req.body);

  res.redirect(req.originalUrl);
};

export const updateNote = async (req, res) => {};

export const deleteNote = async (req, res) => {};
