const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const dbService = require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// read
app.get('/getAll', (request, response) =>{
    //console.log('test case');
    const db = dbService.getDbServiceInstance();
    response.json({
        success: true
    });
});

// create


// delete


// update

app.listen('3000', ()=>{
    console.log(`server is running `);
}); 
