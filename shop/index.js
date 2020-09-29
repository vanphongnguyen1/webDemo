const express = require('express')
const app = express()
const port = 3000
app.get('/', (request ,response)=> response.)
app.get('/name', (request ,response)=> response.send('oscsad'))
app.get('/gender', (request ,response)=> request('female'))
app.listen(port,()=> {
    console.log(`Server listening on port ${port}`)
})