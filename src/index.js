import express  from 'express';
import morgan from 'morgan';
import { PORT } from './config/serverConfig.js';
import apiRouter from './routes/apiRoutes.js'
import connectDb from './config/dbConfig.js';


const app = express();
app.set('view engine','ejs');

app.use(express.json());

app.set('views', import.meta.dirname + '/views');

// app.use(morgan('combined'));

// function mid1(req,res,next){
//     console.log("mid 1");
//     next();
// }

app.use('/api',apiRouter);

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/ping',(req,res)=>{
    // console.log(req.body);
    // console.log(req.query);
    return res.json({
        message:'pong'
    });
});//waht to do if someone makes a get reqest to /ping


// app.all('*',(req,res)=>{
//     return res.status(404).json({
//         message:"not found"
//     })
// })
//create a port and attach it to the express app
app.listen(PORT,()=>{
    console.log(`attach port to ${PORT}`)
    connectDb();
})//