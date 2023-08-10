import { Router } from "express";
import {
    getUsers,
    createUser,
    deleteUser,
    updateUser
} from '../controllers/users.controller'


const router = Router()

router.get('/users', getUsers);

router.post('/users', createUser):


export default router;