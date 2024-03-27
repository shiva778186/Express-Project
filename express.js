const path=require('path')
const express=require('express')
console.log("output below");
console.log(__dirname)
console.log(__filename)
console.log(path.join(__dirname,'..'))
console.log(path.join(__dirname,'..','../..'))
console.log(path.join(__dirname,'../public'))
