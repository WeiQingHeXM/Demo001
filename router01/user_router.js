import  express  from 'express'
import {  getAllUser } from '../controller/user_ctrl.js'

const http = require('http')

const router = new express.Router()
router.get('/user',getAllUser)

export default router
