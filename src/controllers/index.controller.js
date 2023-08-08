import {pool} from '../db.js'

export const getping = async (req, res) => {
    const [result] = await pool.query("SELECT 'pong' AS RESULT");
  
    res.json(result[0]);
  }