const express = require('express')
const app = express()

const PORT = 3000;
app.get('/', (req,res)=> {
    res.send('hello express!')

})



app.get('/help', (req,res)=> {
    res.send('help page')
})
 
app.get('/about', (req,res)=> {
    res.send('about')
})

app.get('/weather', (req,res)=> {
    res.send('your weather')
})

app.listen(PORT, () => {
  console.log(`the port is ${PORT}`);
});
