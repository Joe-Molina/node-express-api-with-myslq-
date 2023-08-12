import { pool } from "../db.js";
import bodyParser from "body-parser";
import axios from "axios";
import moment from "moment";
import bcrypt from "bcrypt";
import myConnection from "express-myconnection";

export const getLogin = async (req, res) => {
  res.render("login", { error: false });
};

export const postLogin = async (req, res) => {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM users WHERE email = ?",
      [data.email],
      (err, userdata) => {
        if (userdata.length > 0) {
            const password = data.password
            const hash =  userdata[0].password

          bcrypt.compare(
            password,
            hash,
            (err, isMatch) => {

                console.log(isMatch)
            //   if (!isMatch) {
            //     console.log(password)
            //     console.log(hash)
            //     console.log(isMatch);
            //     res.render("login", { error: "incorrect password" });
            //   } else {
            //     console.log("welcome");
            //   }
            }
          );
        } else {
          res.render("login", { error: "el usuario no existe" });
        }
      }
    );
  });
};
