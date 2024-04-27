const express = require('express');
const path = require('path');
const app = express();


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"base.html"));
    
});

app.listen(4000 ,()=>{
    console.log("Listening to port 4000");
})
