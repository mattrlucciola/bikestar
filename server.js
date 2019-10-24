import express from 'express';
import cors from 'cors';
const path = require('path');
import logger from 'morgan';
import { allTrailsRouter, allStatesRouter, userRouter} from './routes';

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.get('/test', (req,res) =>{
    return res.header(200).send({greetings: "Let's go for a nice ride on our bikes"})
})

app.use(express.static(path.join(__dirname, 'client/build')));

app.use("/api", [allTrailsRouter, allStatesRouter, userRouter])

const PORT = 51011

app.listen(PORT)
console.log('The Server is surfing on Port::', PORT)
