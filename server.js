<<<<<<< HEAD
import express from 'express';
import cors from 'cors';
// const path = require('path');
import path from 'path';
import logger from 'morgan';
import { allTrailsRouter, allStatesRouter, userRouter} from './routes';

=======
import express from 'express'
import cors from 'cors'
import logger from 'morgan'
import { allTrailsRouter, allStatesRouter, userRouter} from './routes'
// const path = require('path')
>>>>>>> Marcos
const app = express()
//serve the static files from the React App
// app.use(express.static(path.join(_dirname, 'client/build')))
app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.get('/test', (req,res) =>{
    return res.header(200).send({greetings: "Let's go for a nice ride on our bikes"})
})

app.use("/api", [allTrailsRouter, allStatesRouter, userRouter])

app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/static',express.static(path.join(__dirname, 'client/build/static')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname,'/client/build/index.html'));
});


const PORT = (+process.env.PORT) || 51011;
console.log(PORT);

app.listen(PORT)
console.log('The Server is surfing on Port::', PORT)
