// const connectToMongo = require('./db');
// const express = require('express')
// var cors = require('cors')
// const dotenv = require('dotenv');

// dotenv.config({ path: './config.env' })

// connectToMongo();

// const app = express()
// const port = process.env.PORT || 8000

// app.use(cors())
// app.use(express.json())

// app.use('/api/insert', require('./routes/dataRoutes'))  

// app.listen(port, () => {
//     console.log(`Backend listening on port ${port}`)
// })


const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const multer  = require('multer')
const dotenv = require('dotenv');
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// const upload=multer({dest:'uploads/'})

dotenv.config({ path: './config.env' })

connectToMongo();

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(express.urlencoded({ extended: false }));

app.use('/api/insert', jsonParser,  require('./routes/dataRoutes'))  

// app.post("/upload",upload.single('profileImage'),(req,req)=>{
    // console.log(req.body);
    // console.log(req.file);

    // return res.redirect('/');
// })

app.listen(port, () => {
    console.log(`Backend listening on port ${port}`)
})





