import { pool } from "../db.js";
import bodyParser from 'body-parser'
import axios from 'axios'
import moment from 'moment'

const now = moment().format('MMMM Do YYYY, h:mm:ss a');

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

    
    const { title, content, userId } = req.body;
    
    console.log(title)


     const [rows] = await pool.query(
    "INSERT INTO notes(title, content, createdAt, userId) VALUES (?, ?, ?, ?)",
    [title, content, now, userId]
    );


  console.log(req.body);


  res.redirect(req.originalUrl)
};


export const updateNote = async (req, res) => {
    
};


export const deleteNote = async (req, res) => {
    
};

