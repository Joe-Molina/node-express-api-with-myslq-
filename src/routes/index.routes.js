import {Router} from 'express'
import {getping} from '../controllers/index.controller.js'

const router = Router()

router.get("/ping", getping );

export default router