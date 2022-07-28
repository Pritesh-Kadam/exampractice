const { response } = require('express');
var express=require('express')
var app=express();
app.get('/',(req,res)=>{
res.send("Welcome to chai wala Tapri");
});
app.listen(9000);
console.log("server start at port 9000");