const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
  res.send({
    name:"sandeep"
  })
})
console.log(process.env.PORT)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})