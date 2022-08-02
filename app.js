import express  from 'express'
import userRouter from  './router01/user_router.js'

const app = express()

app.use('/api',userRouter)

app.listen(80, ()  => {
    console.log("run at my heart")
}) 
