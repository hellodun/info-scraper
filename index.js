const express = require("express")
const request = require("request-promise")
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 5000

//Root Path
app.get('/', (req, res) => {
  res.send('Welcome to the Info Data Scrapper API')
})


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))