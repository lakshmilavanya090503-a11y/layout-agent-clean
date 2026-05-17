const express = require('express')
const cors = require('cors')

const chatRoute = require('./routes/chat')

const app = express()

app.use(cors())

app.use(express.json())

app.use('/api/chat', chatRoute)

app.get('/', (req, res) => {
  res.send('Server running')
})

app.listen(3001, () => {
  console.log('Server running on port 3001')
})
