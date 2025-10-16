const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
  res.send('API WEB SERVER')
})

//API USERS MANAGEMENT
app.get('/users/:id', (req, res) => {
  res.send(req.params)
})

app.post('/users', (req, res) => {
  res.send('POST USERS DATA X')

})

app.put('/users/:id', (req, res) => {
  res.send(req.params)

})

app.delete('/users/:id', (req, res) => {
  res.send(req.params)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})