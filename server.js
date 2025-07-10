import express from 'express';
import dotenv from 'dotenv';
import pageRouter from './routes/pageRoutes.js'



// initialize express app
const app = express()


//dotenv config
dotenv.config();

// env variable 
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// static folder
app.use(express.static('public'));


//ejs set
app.set('view engine', 'ejs')


// routing set
app.use(pageRouter)


// listen
app.listen(5050, ()=>{
    console.log(`Server is running on port ${PORT}`);
})


