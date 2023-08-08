import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  try {
    throw new Error("db error");

    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      mesagge: "algo ssalio mal",
    });
  }
};

export const getEmployee = async (req, res) => {
  console.log(req.params.id);

  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
    req.params.id,
  ]);

  if (rows.length <= 0)
    return res.status(404).json({
      mesagge: "employee not found",
    });

  res.json(rows[0]);
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee(name, saralary) VALUES (?, ?)",
    [name, salary]
  );
  console.log(req.body);
  res.send({
    id: rows.insertId,
    name,
    salary,
  });
};

export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  const [result] = await pool.query(
    "UPDATE employee SET name = IFNULL(?, name), saralary = IFNULL(?, saralary) WHERE id = ?",
    [name, salary, id]
  );

  console.log(result);

  if (result.affectedRows <= 0)
    return res.status(404).json({
      message: "employee not found",
    });

  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

  res.json(rows[0]);
};

export const deleteEmployees = async (req, res) => {
  const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows <= 0)
    return res.status(404).json({
      mesagge: "employee not found",
    });
  console.log(result);
  res.sendStatus(204);
};
