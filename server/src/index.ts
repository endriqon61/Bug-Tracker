import  connection  from './lib/mongoose/connection'
import express from 'express'
import userRouter from './routes/user'

const app = express();

app.use(express.json())
app.use('/api/v1', userRouter)
app.listen('8080', async() => {
   await connection('mongodb+srv://endriqon:GdGiI1b4ItQ5YLVz@jim-cluster.lv1sz.mongodb.net/?retryWrites=true&w=majority')
   console.log('connected \n server is listening...')
})
