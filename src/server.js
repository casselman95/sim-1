const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();

// app.use(bodyParser.json());
// app.use(cors());
// console.log(process.env.connectionString)
// massive(process.env.connectionString).then(dbInstance => app.set('db', dbInstance))




const port = 3000;
app.lsiten(port, ()=> [console.log(`Server listening on port ${port}`);]);
