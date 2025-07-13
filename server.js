import express from 'express';
import dotenv from 'dotenv';
import pageRouter from './routes/pageRoutes.js';
import expressEjsLayout from 'express-ejs-layouts'
import {footerData} from './data/footerData.js'
import {headerData} from './data/headerData.js'




//dotenv config
dotenv.config();

const PORT = process.env.PORT || 3000

// initialize express app
const app = express()




// env variable 

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// static folder
app.use(express.static('public'));


//ejs set
app.set('view engine', 'ejs')


// setup ejs layouts
app.use(expressEjsLayout)

//global footer data
app.use((req, res, next)=>{
      res.locals.headerData = headerData;
    res.locals.footerData = footerData
    next()
})



// routing set
app.use(pageRouter)


// listen
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT} `)
})

