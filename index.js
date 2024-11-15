const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({ user: 'tobi' })
})

app.post('/', (req, res) => {
    res.json({ user: 'tobi' })
  })

app.put('/user', (req, res) => {
    res.json({ user: 'tobi' })
})

app.delete('/user', (req, res) => {
    res.json({ user: 'tobi' })
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
