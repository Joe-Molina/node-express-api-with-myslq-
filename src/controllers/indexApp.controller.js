import { pool } from "../db.js";
import bodyParser from 'body-parser'
import axios from 'axios'

export const getNotes = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM notes");

    const [rows2] = await pool.query("SELECT * FROM users");

    console.log(rows2)

    //console.log(rows)

    res.render('index.ejs', {notes: rows, users: rows2} )

};

export const getNote = async (req, res) => {
    
};


export const createNote = async (req, res) => {

    
    const { title, content, createdAt, userId } = req.body;
    
    console.log(title)


     const [rows] = await pool.query(
    "INSERT INTO notes(title, content, createdAt, userId) VALUES (?, ?, ?, ?)",
    [title, content, createdAt, userId]
    );


  console.log(req.body);


  res.redirect(req.originalUrl)
};


export const updateNote = async (req, res) => {
    
};


export const deleteNote = async (req, res) => {
    
};
