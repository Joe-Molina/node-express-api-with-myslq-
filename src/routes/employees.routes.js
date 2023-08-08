import { Router } from "express";
import { getEmployees,getEmployee , createEmployee, updateEmployees, deleteEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", createEmployee);

router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

export default router;
