// const express = require("express")
// const multer  = require('multer')

// const upload = multer({ dest: './public/data/uploads/'})
// const bodyParser = require("body-parser")


// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());


// app.post('/stats', upload.single('file'), async function (req, res) {
   
     
//     // await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toFile(__dirname + `/images/${req.file.originalname}`)
//     // res.status(201).send('Image uploaded succesfully')
//     // req.file is the name of your file in the form above, here 'uploaded_file'
//     // req.body will hold the text fields, if there were any 
//     res.send("heli9d")
//  });
// app.listen(3000,()=>{
//     console.log("server is running on port 3000s");
// })


const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express()


app.post('/stats', upload.single('file'), (req, res, next) => {
    return res.send("hekjdbc")
})

app.listen(3000, function () {
    console.log("Working on port 4000");
});