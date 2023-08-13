import { pool } from "../db.js";
import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import bcrypt from "bcrypt";
import myConnection from "express-myconnection";
import session from "express-session";

export const getLogin = async (req, res) => {
  if (req.session.loggedin != true) {
    res.render("login", { error: false });
  } else {
    res.redirect("/");
  }
};

export const postLogin = async (req, res) => {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM users WHERE email = ?",
      [data.email],
      (err, userdata) => {
        if (userdata.length > 0) {
          const password = data.password;
          const hash = userdata[0].password;

          bcrypt.compare(password, hash, (err, isMatch) => {
            if (!isMatch) {
              res.render("login", { error: "incorrect password" });
            } else {
              req.session.loggedin = true;
              req.session.name = userdata[0].name;
              req.session.email = userdata[0].email;

              res.redirect("/");
            }
          });
        } else {
          res.render("login", { error: "el usuario no existe" });
        }
      }
    );
  });
};

export const getLogOut = async (req, res) => {
  if (req.session.loggedin == true) {
    req.session.destroy();
  }
  res.redirect("/login");
};
