import { Router } from "express";
import {
    getNote,
    getNotes,
    createNote,
    updateNote,
    deleteNote
} from '../controllers/indexApp.controller.js'

const router = Router();

router.get("/", getNotes);

router.get("/indexApp/:id", getNote);

router.post("/indexApp", createNote);

router.patch("/indexApp/:id", updateNote);

router.delete("/indexApp/:id", deleteNote);

export default router;