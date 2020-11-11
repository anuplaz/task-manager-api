const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/userRouter')
const taskRouter = require('./routers/taskRouter')

const app = express()
const port = process.env.PORT

//Maintenance Mode
// app.use((req,res,next)=>{
//     res.status(503).send('Site is currently down. Please try again later.')
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, ()=>{
    console.log('Server is started running on ' +port);
})