const express = require('express')
const app = express()
const port = 3000
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/getMsg', (req, res) => {
    res.json({'data':'Message from API'})
})

app.post('/api/postMsg', (req, res) => {
    console.log(req['body']);
    res.json({'data':'Message from API'})
})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})