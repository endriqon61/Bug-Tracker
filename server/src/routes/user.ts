import express from 'express'
import {register, logIn} from '../controllers/user'
const router = express.Router()

router.get('/', (req, res)=>{res.send("hello this is route")})
router.post('/register', register)
router.post('logIn', logIn)

export default router


